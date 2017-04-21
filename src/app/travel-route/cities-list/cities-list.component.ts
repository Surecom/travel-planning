import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';
import { sortBy } from 'lodash';
import { List } from 'immutable';

import { CityModel } from '../models/city.model';
import { TravelRouteConstants } from '../common/constants';

@Component({
  selector: '[cities-list]',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesListComponent implements OnInit {

  public cities$: Observable<CityModel[]>;
  public loading$: Observable<boolean>;

  constructor(private store: Store<{}>) { }

  ngOnInit() {
    this.cities$ = this.store.select('travel').map((state: Map<string, List<CityModel>>) => {
      const cities = state.get('cities').toJS();
      return sortBy(
        cities,
        (city: CityModel) => +moment(city.from, TravelRouteConstants.DATE_FORMAT)
      );
    });
    this.loading$ = this.store.select('travel').map((state: Map<string, boolean>) => state.get('loading'));
  }
}
