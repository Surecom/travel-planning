import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import { MdDialog } from '@angular/material';
import { Database } from '@ngrx/db';
import { AES } from 'crypto-js';
import { Map, List } from 'immutable';

import { updateCitiesDate } from './actions/city.actions';
import { CityDateUpdate } from './models/city-date-update';
import { UploadModalComponent } from './upload-modal/upload-modal.component';
import { CityExportModel, TransferExportModel } from './models/export.model';
import { ImportModalComponent } from './import-modal/import-modal.component';
import { TravelModel } from './models/travel.model';
import { loadTravels, setCurrentTravel } from './actions/travel.actions';
import { CityModel } from './models/city.model';
import { TransferModel } from './models/transfer.model';

@Component({
  selector: '[travel-route]',
  templateUrl: './travel-route.component.html',
  styleUrls: ['./travel-route.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TravelRouteComponent implements OnInit {

  private key = 'PANDAS POWER ITS IMPOSSIBLE';
  public travels$: Observable<List<TravelModel>>;
  public currentTravelId$: Observable<string>;
  public isDisabled = false;
  private currentTravelId = '';
  private currentTravelIdChanged = true;

  constructor(private store: Store<{}>, private dialog: MdDialog, private db: Database) { }

  ngOnInit() {
    this.store.dispatch(loadTravels());
    this.travels$ = this.store.select('travel').map((state: Map<string, List<TravelModel>>) => state.get('travels'));
    this.travels$.subscribe((res: List<TravelModel>) => {
      const travels = res.toJS();
      if (travels.length > 0 && this.currentTravelIdChanged) {
        this.currentTravelIdChanged = false;
        this.store.dispatch(setCurrentTravel(travels[0].id));
      }
    });
    this.currentTravelId$ = this.store.select('travel').map((state: any) => state.get('currentTravelId'));
    this.currentTravelId$.subscribe(res => this.currentTravelId = res);
  }

  disabled(result: string) {
    this.isDisabled = (result === 'disabled');
  }

  updateCities(dates: CityDateUpdate[]) {
    this.store.dispatch(updateCitiesDate(dates.map((date: CityDateUpdate) => date.toModel())));
  }

  showExportModal() {
    Observable.forkJoin(
      this.db.query('cities').toArray(),
      this.db.query('transfers').toArray(),
      this.db.query('travels').toArray()
    ).subscribe(res => this.dialog.open(UploadModalComponent, {
      disableClose: true,
      data: this.prepareToExport(res[0], res[1], res[2]).toString()
    }));
  }

  showImportModal() {
    this.dialog.open(ImportModalComponent, {disableClose: true, data: this.key});
  }

  prepareToExport(cities: CityModel[], transfers: TransferModel[], travels: TravelModel[]) {
    const json: Array<CityExportModel> = [];
    let travel: TravelModel;
    for (let k = 0; k < travels.length; k++) {
      if (travels[k].id === this.currentTravelId) {
        travel = travels[k];
        break;
      }
    }
    for (let i = 0; i < cities.length; i++) {
      const tmp: CityExportModel = new CityExportModel();
      tmp.description = cities[i].description;
      tmp.from = cities[i].from;
      tmp.title = cities[i].title;
      tmp.to = cities[i].to;
      tmp.cost = cities[i].cost.toString();
      tmp.travelId = cities[i].travelId;
      for (let j = 0; j < transfers.length; j++) {
        if (transfers[j].cityId === cities[i].id) {
          const tmpTransfer: TransferExportModel = new TransferExportModel();
          tmpTransfer.to = transfers[j].to;
          tmpTransfer.from = transfers[j].from;
          tmpTransfer.cost = transfers[j].cost.toString();
          tmpTransfer.info = transfers[j].info;
          tmpTransfer.way = transfers[j].way;
          tmpTransfer.order = transfers[j].order.toString();
          tmp.transfers.push(tmpTransfer);
        }
      }
      json.push(tmp);
    }
    const currentTravel = {
      json,
      travel
    };
    return AES.encrypt(JSON.stringify(currentTravel), this.key);
  }
}
