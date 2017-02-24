import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { CityModel } from './models/city.model';
import { loadCities, updateCitiesDate } from './actions/city.actions';
import { CityState } from './reducers/city.reducer';
import { CityDateUpdate } from './models/city-date-update';
import { TransferModel } from './models/transfer.model';
import { LoadTransfers } from './actions/transfer.action';

@Component({
  selector: '[travel-route]',
  templateUrl: './travel-route.component.html',
  styleUrls: ['./travel-route.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TravelRouteComponent implements OnInit {

  public cities$: Observable<CityModel[]>;

  constructor(private store: Store<CityModel | TransferModel>) { }

  ngOnInit() {
    this.store.dispatch(loadCities());
    this.store.dispatch(new LoadTransfers());
    this.cities$ = this.store.select('cities').map((state: CityState) => state.cities);
  }

  updateCities(dates: CityDateUpdate[]) {
    this.store.dispatch(updateCitiesDate(dates.map((date: CityDateUpdate) => date.toModel())));
  }
}
