import { Component, Input, OnChanges, QueryList } from '@angular/core';
import * as moment from 'moment';

import { CityModel } from '../models/city.model';
import { TravelRoute } from '../common/constants';

@Component({
  selector: '[total-days]',
  templateUrl: './total-days.component.html',
  styleUrls: ['./total-days.component.scss']
})
export class TotalDaysComponent implements OnChanges {

  @Input()
  private cities: QueryList<CityModel>;

  public totalDays = 0;

  constructor() { }

  ngOnChanges(): void {
    if (this.cities.length > 0) {
      this.totalDays = this.cities
        .map(city => moment(city.to, TravelRoute.DATE_FORMAT).diff(moment(city.from, TravelRoute.DATE_FORMAT), 'days'))
        .reduce((s, o) => s + o);
    }
  }

}
