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
import { MdSnackBar } from '@angular/material';

import { CityModel, ICityModel } from '../models/city.model';
import { ITransferModel, TransferModel } from '../models/transfer.model';
import {
  ActionTypes,
  addTravelSuccess,
  importTravelSuccess,
  loadTravelsSuccess,
  removeTravelSuccess,
  setCurrentTravelSuccess,
  updateTravelSuccess
} from '../actions/travel.actions';
import { ITravelModel, TravelModel } from '../models/travel.model';
import { IDBElements } from '../types';

@Injectable()
export class TravelEffectsService {

  @Effect()
  loadTravels$: Observable<Action> =
    this.actions$
      .ofType(ActionTypes.LOAD_TRAVELS)
      .switchMap(() =>
        this.db.query('travels')
          .toArray()
          .map((travels: TravelModel[]) => loadTravelsSuccess(travels))
      );

  @Effect()
  setCurrentTravel$: Observable<Action> =
    this.actions$
      .ofType(ActionTypes.SET_CURRENT_TRAVEL)
      .map((travelId: Action) => <String>travelId.payload)
      .mergeMap((travelId: string) => this.db.query('cities')
        .toArray()
        .mergeMap((cities: CityModel[]) => {
          const tmpCities: CityModel[] = [];
          for (let i = 0; i < cities.length; i++) {
            if (cities[i].travelId === travelId) {
              tmpCities.push(cities[i]);
            }
          }
          return this.db.query('transfers')
            .toArray()
            .map((transfers: TransferModel[]) => {
              const tmpTransfers: TransferModel[] = [];
              for (let i = 0; i < tmpCities.length; i++) {
                for (let j = 0; j < transfers.length; j++) {
                  if (transfers[j].cityId === tmpCities[i].id) {
                    tmpTransfers.push(transfers[j]);
                  }
                }
              }
              return setCurrentTravelSuccess(tmpCities, tmpTransfers);
            });
        })
      );

  @Effect()
  addTravel$: Observable<Action> = this.actions$
    .ofType(ActionTypes.ADD_TRAVEL)
    .map((travel: Action) => (<TravelModel>travel.payload).toModel())
    .mergeMap((travel: ITravelModel) =>
      this.db.insert('travels', [travel])
        .map(() => {
          this.snackBar.open(`Travel ${travel.name} added successfully!`, null, {duration: 3000});
          return addTravelSuccess(travel);
        })
    );

  @Effect()
  importTravel$: Observable<Action> = this.actions$
    .ofType(ActionTypes.IMPORT_TRAVEL)
    .map((exportArr: Action) => exportArr.payload)
    .mergeMap((exportArr: IDBElements) => {
      const citiesArr: Array<ICityModel> = [];
      const transfersArr: Array<ITransferModel> = [];
      for (let i = 0; i < exportArr.json.length; i++) {
        const tmpCity = new CityModel({
          to: exportArr.json[i].to,
          from: exportArr.json[i].from,
          title: exportArr.json[i].title,
          description: exportArr.json[i].description,
          cost: +exportArr.json[i].cost,
          travelId: exportArr.json[i].travelId
        });
        citiesArr.push(tmpCity.toModel());
        if (exportArr.json[i].transfers.length > 0) {
          for (let j = 0; j < exportArr.json[i].transfers.length; j++) {
            const tmpTransfer = new TransferModel({
              cityId: tmpCity.id,
              way: exportArr.json[i].transfers[j].way,
              info: exportArr.json[i].transfers[j].info,
              from: exportArr.json[i].transfers[j].from,
              to: exportArr.json[i].transfers[j].to,
              cost: +exportArr.json[i].transfers[j].cost,
              order: +exportArr.json[i].transfers[j].order
            });
            transfersArr.push(tmpTransfer.toModel());
          }
        }
      }
      return Observable
        .forkJoin(
          this.db.insert('cities', citiesArr),
          this.db.insert('transfers', transfersArr),
          this.db.insert('travels', [exportArr.travel])
        )
        .map(() => importTravelSuccess(exportArr.travel.id));
    });

  @Effect()
  removeTravel$: Observable<Action> = this.actions$
    .ofType(ActionTypes.REMOVE_TRAVEL)
    .map((travel: Action) => <TravelModel>travel.payload)
    .mergeMap((travel: ITravelModel) => this.db.query('cities')
      .toArray()
      .mergeMap((cities: CityModel[]) => {
        const cityIds: Array<string> = [];
        for (let i = 0; i < cities.length; i++) {
          if (cities[i].travelId === travel.id) {
            cityIds.push(cities[i].id);
          }
        }
        if (cityIds.length === 0) {
          return this.db.executeWrite('travels', 'delete', [ travel.id ]);
        } else {
          return Observable.forkJoin(
              this.db.executeWrite('cities', 'delete', cityIds),
              this.db.executeWrite('travels', 'delete', [ travel.id ]),
              this.db.query('transfers')
                .toArray()
                .mergeMap((transfers: TransferModel[]) => {
                  const transferIds: Array<string> = [];
                  for (let i = 0; i < cityIds.length; i++) {
                    for (let j = 0; j < transfers.length; j++) {
                      if (transfers[j].cityId === cityIds[i]) {
                        transferIds.push(transfers[j].id);
                      }
                    }
                  }
                  if (transferIds.length > 0) {
                    return this.db.executeWrite('transfers', 'delete', transferIds);
                  }
                })
            );
        }
      })
      .toArray()
      .map(() => {
        this.snackBar.open(`Travel ${travel.name} removed successfully!`, null, {duration: 3000});
        return removeTravelSuccess(travel);
      })
    );

  @Effect()
  updateTravel$: Observable<Action> = this.actions$
    .ofType(ActionTypes.UPDATE_TRAVEL)
    .map((travel: Action) => travel.payload)
    .mergeMap((travels: ITravelModel) =>
      this.db.insert('travels', [travels])
        .map(() => updateTravelSuccess(travels))
    );

  constructor(private actions$: Actions,
              private db: Database,
              private snackBar: MdSnackBar) { }

}
