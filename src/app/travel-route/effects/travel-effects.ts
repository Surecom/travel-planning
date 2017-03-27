/**
 * Created by Andrei_Furs on 3/23/2017.
 */
import { Injectable } from '@angular/core';
import { Database } from '@ngrx/db';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';


import { CityModel, ICityModel } from '../models/city.model';
import { ITransferModel, TransferModel } from '../models/transfer.model';
import { CityExportModel } from '../models/export.model';
import { ActionTypes, importTravelSuccess } from '../actions/travel.actions';

@Injectable()
export class TravelEffectsService {

  @Effect()
  importTravel$: Observable<Action> = this.actions$
    .ofType(ActionTypes.IMPORT_TRAVEL)
    .map((exportArr: Action) => exportArr.payload)
    .mergeMap((exportArr: CityExportModel[]) => {
      const citiesArr: Array<ICityModel> = [];
      const transfersArr: Array<ITransferModel> = [];
      for (let i = 0; i < exportArr.length; i++) {
        const tmpCity = new CityModel({
          to: exportArr[i].to,
          from: exportArr[i].from,
          title: exportArr[i].title,
          description: exportArr[i].description,
          cost: +exportArr[i].cost
        });
        citiesArr.push(tmpCity.toModel());
        if (exportArr[i].transfers.length > 0) {
          for (let j = 0; j < exportArr[i].transfers.length; j++) {
            transfersArr.push((new TransferModel({
              cityId: tmpCity.id,
              way: exportArr[i].transfers[j].way,
              info: exportArr[i].transfers[j].info,
              from: exportArr[i].transfers[j].from,
              to: exportArr[i].transfers[j].to,
              cost: +exportArr[i].transfers[j].cost
            })).toModel());
          }
        }
      }
      return Observable
        .forkJoin(this.db.insert('cities', citiesArr), this.db.insert('transfers', transfersArr))
        .toArray()
        .map(() => {
          return importTravelSuccess(citiesArr, transfersArr);
        });
    });

  constructor(private actions$: Actions,
              private db: Database) { }

}
