import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { Action } from '@ngrx/store';
import { ActionTypes, loadCitiesSuccess, addCitySuccess, removeCitySuccess, updateCitiesDateSuccess } from '../travel-route.actions';
import { Database } from '@ngrx/db';
import { CityModel, ICityModel } from '../models/city-model';
import { defer } from 'rxjs/observable/defer';
import { MdSnackBar } from '@angular/material';

import * as _ from 'lodash';
import * as moment from 'moment';
import { ICityDateUpdate } from '../models/city-date-update';
import { TravelRoute } from '../common/constants';

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
          .map((cities: CityModel[]) => loadCitiesSuccess(
            _.sortBy(cities, (city: CityModel) => moment(city.from, TravelRoute.DATE_FORMAT).valueOf())
          )));

  @Effect()
  addCity$: Observable<Action> = this.actions$
    .ofType(ActionTypes.ADD_CITY)
    .map((city: Action) => (<CityModel>city.payload).toModel())
    .mergeMap((city: ICityModel) =>
      this.db.insert('cities', [city])
        .map(() => {
          this.snackBar.open(`City ${city.title} added successfully!`, null, {duration: 3000});
          return addCitySuccess(city);
        })
    );


  @Effect()
  updateCityDate$: Observable<Action> = this.actions$
    .ofType(ActionTypes.UPDATE_CITIES_DATES)
    .map((cityUpdateAction: Action) => cityUpdateAction.payload)
    .mergeMap((cityUpdateModels: ICityDateUpdate[]) =>
      this.db.query('cities')
        .toArray()
        .map((cities: CityModel[]) =>
          _.filter(cities, (city: CityModel) => {
            const newTo = _.find(cityUpdateModels, (model: ICityDateUpdate) => city.to === model.oldDate);
            const newFrom = _.find(cityUpdateModels, (model: ICityDateUpdate) => city.from === model.oldDate);
            if (newTo) {
              city.to = newTo.newDate;
            }
            if (newFrom) {
              city.from = newFrom.newDate;
            }
            return newTo || newFrom;
          })
        )
        .mergeMap((newCities: CityModel[]) =>
          this.db.insert('cities', newCities)
            .toArray()
            .map((updatedCities: CityModel[]) => {
              this.snackBar.open(`Cities dates updated successfully!`, null, {duration: 3000});
              return updateCitiesDateSuccess(updatedCities);
            })
        )
    );

  @Effect()
  removeCity$: Observable<Action> = this.actions$
    .ofType(ActionTypes.REMOVE_CITY)
    .map((city: Action) => <CityModel>city.payload)
    .mergeMap((city: ICityModel) =>
      this.db.executeWrite('cities', 'delete', [ city.id ])
        .map(() => {
          this.snackBar.open(`City ${city.title} removed successfully!`, null, {duration: 3000});
          return removeCitySuccess(city);
        })
    );

  constructor(private actions$: Actions,
              private db: Database,
              private snackBar: MdSnackBar) { }

}
