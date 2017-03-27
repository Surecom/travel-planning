import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import { MdDialog } from '@angular/material/dialog/dialog';
import { Database } from '@ngrx/db';
import { AES } from 'crypto-js';

import { CityModel } from './models/city.model';
import { loadCities, updateCitiesDate } from './actions/city.actions';
import { TravelState } from './reducers/reducer';
import { CityDateUpdate } from './models/city-date-update';
import { TransferModel } from './models/transfer.model';
import { LoadTransfers } from './actions/transfer.action';
import { UploadModalComponent } from './upload-modal/upload-modal.component';
import { CityExportModel, TransferExportModel } from './models/export.model';
import { ImportModalComponent } from './import-modal/import-modal.component';

@Component({
  selector: '[travel-route]',
  templateUrl: './travel-route.component.html',
  styleUrls: ['./travel-route.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TravelRouteComponent implements OnInit {

  private key = 'PANDAS POWER ITS IMPOSSIBLE';
  public cities$: Observable<CityModel[]>;
  public loading$: Observable<boolean>;
  public transfers$: Observable<TransferModel[]>;

  constructor(private store: Store<CityModel | TransferModel>, private dialog: MdDialog, private db: Database) { }

  ngOnInit() {
    this.store.dispatch(loadCities());
    this.store.dispatch(new LoadTransfers());
    this.cities$ = this.store.select('travel').map((state: TravelState) => state.cities);
    this.transfers$ = this.store.select('travel').map((state: TravelState) => state.transfers);
    this.loading$ = this.store.select('travel').map((state: TravelState) => state.loading);
  }

  updateCities(dates: CityDateUpdate[]) {
    this.store.dispatch(updateCitiesDate(dates.map((date: CityDateUpdate) => date.toModel())));
  }

  showExportModal() {
    Observable
      .forkJoin(this.db.query('cities').toArray(), this.db.query('transfers').toArray())
      .subscribe(res => this.dialog.open(UploadModalComponent, {
          disableClose: true,
          data: this.prepareToExport(res[0], res[1]).toString()
        })
      );
  }

  showImportModal() {
    const importModal = this.dialog.open(ImportModalComponent, {disableClose: true, data: this.key});
  }

  prepareToExport(cities, transfers) {
    const json: Array<CityExportModel> = [];
    for (let i = 0; i < cities.length; i++) {
      const tmp: CityExportModel = new CityExportModel();
      tmp.description = cities[i].description;
      tmp.from = cities[i].from;
      tmp.title = cities[i].title;
      tmp.to = cities[i].to;
      tmp.cost = cities[i].cost;
      for (let j = 0; j < transfers.length; j++) {
        if (transfers[j].cityId === cities[i].id) {
          const tmpTransfer: TransferExportModel = new TransferExportModel();
          tmpTransfer.to = transfers[j].to;
          tmpTransfer.from = transfers[j].from;
          tmpTransfer.cost = transfers[j].cost;
          tmpTransfer.info = transfers[j].info;
          tmpTransfer.way = transfers[j].way;
          tmp.transfers.push(tmpTransfer);
        }
      }
      json.push(tmp);
    }
    return AES.encrypt(JSON.stringify(json), this.key);
  }
}
