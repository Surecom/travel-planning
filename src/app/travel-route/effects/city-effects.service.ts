import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material/snack-bar/snack-bar';
import { Database } from '@ngrx/db';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { defer } from 'rxjs/observable/defer';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { filter, find } from 'lodash';

import {
  ActionTypes,
  addCitySuccess,
  removeCitySuccess,
  updateCitiesDateSuccess,
  updateCitySuccess
} from '../actions/city.actions';
import { CityModel, ICityModel } from '../models/city.model';
import { ICityDateUpdate } from '../models/city-date-update';
import { TransferModel } from '../models/transfer.model';

@Injectable()
export class CityEffectsService {

  @Effect({ dispatch: false })
  openDB$: Observable<any> = defer(() => {
    return this.db.open('travel-planning');
  });

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
        .map((cities: ICityModel[]) =>
          filter(cities, (city: ICityModel) => {
            const newTo = find(cityUpdateModels, (model: ICityDateUpdate) => city.to === model.oldDate);
            const newFrom = find(cityUpdateModels, (model: ICityDateUpdate) => city.from === model.oldDate);
            if (newTo) {
              city.to = newTo.newDate;
            }
            if (newFrom) {
              city.from = newFrom.newDate;
            }
            return newTo || newFrom;
          })
        )
        .mergeMap((newCities: ICityModel[]) =>
          this.db.insert('cities', newCities)
            .toArray()
            .map((updatedCities: ICityModel[]) => {
              this.snackBar.open(`Cities dates updated successfully!`, null, {duration: 3000});
              return updateCitiesDateSuccess(updatedCities);
            })
        )
    );

  @Effect()
  removeCity$: Observable<Action> = this.actions$
    .ofType(ActionTypes.REMOVE_CITY)
    .map((city: Action) => <CityModel>city.payload)
    .mergeMap((city: ICityModel) => this.db.query('transfers')
      .toArray()
      .mergeMap((transfers: TransferModel[]) => {
        const transfersId: Array<string> = [];
        for (let i = 0; i < transfers.length; i++) {
          if (transfers[i].cityId === city.id) {
            transfersId.push(transfers[i].id);
          }
        }
        if (transfersId.length > 0) {
          return Observable
            .forkJoin(
              this.db.executeWrite('transfers', 'delete', transfersId),
              this.db.executeWrite('cities', 'delete', [ city.id ])
            );
        } else {
          return this.db.executeWrite('cities', 'delete', [ city.id ]);
        }
      })
      .toArray()
      .map(() => {
        this.snackBar.open(`City ${city.title} removed successfully!`, null, {duration: 3000});
        return removeCitySuccess(city);
      })
    );

  @Effect()
  updateCity$: Observable<Action> = this.actions$
    .ofType(ActionTypes.UPDATE_CITY)
    .map((city: Action) => city.payload)
    .mergeMap((cities: ICityModel) =>
      this.db.insert('cities', [cities])
        .map(() => updateCitySuccess(cities))
    );

  constructor(private actions$: Actions,
              private db: Database,
              private snackBar: MdSnackBar) { }

}
