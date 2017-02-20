import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { ActionTypes, loadCitiesSuccess, addCitySuccess, removeCitySuccess } from '../travel-route.actions';
import { Database } from '@ngrx/db';
import { CityModel, ICityModel } from '../models/city-model';
import { defer } from 'rxjs/observable/defer';
import { MdSnackBar } from '@angular/material';

import * as _ from 'lodash';
import * as moment from 'moment';

@Injectable()
export class TravelEffectsService {

  @Effect({ dispatch: false })
  openDB$: Observable<any> = defer(() => {
    return this.db.open('travel-planning');
  });

  @Effect()
  loadCities$: Observable<Action> =
    this.actions$
      .ofType(ActionTypes.LOAD_CITIES)
      .switchMap(() =>
        this.db.query('cities')
          .toArray()
          .map((cities: CityModel[]) => loadCitiesSuccess(_.sortBy(cities, (city: CityModel) => moment(city.from).valueOf()))));

  @Effect()
  addCity$: Observable<Action> = this.actions$
    .ofType(ActionTypes.ADD_CITY)
    .map((city: Action) => (<CityModel>city.payload).toModel())
    .mergeMap((city: ICityModel) =>
      this.db.insert('cities', [city])
        .map(() => {
          this.snackBar.open(`City ${city.title} added successfully!`);
          return addCitySuccess(city);
        })
    );

  @Effect()
  removeCity$: Observable<Action> = this.actions$
    .ofType(ActionTypes.REMOVE_CITY)
    .map((city: Action) => <CityModel>city.payload)
    .mergeMap((city: ICityModel) =>
      this.db.executeWrite('cities', 'delete', [ city.id ])
        .map(() => {
          this.snackBar.open(`City ${city.title} removed successfully!`);
          return removeCitySuccess(city);
        })
    );

  constructor(private actions$: Actions,
              private db: Database,
              private snackBar: MdSnackBar) { }

}
