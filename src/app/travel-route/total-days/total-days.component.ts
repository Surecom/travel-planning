import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { CityModel } from '../models/city.model';
import { TravelRouteConstants } from '../common/constants';
import { TravelState } from '../reducers/reducer';

@Component({
  selector: '[total-days]',
  templateUrl: './total-days.component.html',
  styleUrls: ['./total-days.component.scss']
})
export class TotalDaysComponent implements OnInit {

  public cities$: Observable<CityModel[]>;
  public cities: CityModel[];

  public totalDays = 0;

  constructor(private store: Store<TravelState>) { }

  ngOnInit() {
    this.cities$ = this.store.select('travel').map((state: TravelState) => state.cities);
    this.cities$.subscribe(res => {
      this.cities = res;
      if (this.cities.length > 0) {
        this.totalDays = this.cities
          .map(city => moment(city.to, TravelRouteConstants.DATE_FORMAT).diff(moment(city.from, TravelRouteConstants.DATE_FORMAT), 'days'))
          .reduce((s, o) => s + o);
      } else {
        this.totalDays = 0;
      }
    });
  }

}
