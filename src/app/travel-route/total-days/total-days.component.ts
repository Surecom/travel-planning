import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { List, Map } from 'immutable';

import { CityModel } from '../models/city.model';
import { TravelRouteConstants } from '../common/constants';

@Component({
  selector: '[total-days]',
  templateUrl: './total-days.component.html',
  styleUrls: ['./total-days.component.scss']
})
export class TotalDaysComponent implements OnInit {

  public cities$: Observable<List<CityModel>>;
  public cities: CityModel[];

  public totalDays = 0;

  constructor(private store: Store<{}>) { }

  ngOnInit() {
    this.cities$ = this.store.select('travel').map((state: Map<string, List<CityModel>>) => state.get('cities'));
    this.cities$.subscribe((res: List<CityModel>) => {
      this.cities = res.toJS();
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
