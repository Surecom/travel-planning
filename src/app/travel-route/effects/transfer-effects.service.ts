import { Injectable } from '@angular/core';
import { Database } from '@ngrx/db';
import { MdSnackBar } from '@angular/material/snack-bar/snack-bar';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { defer } from 'rxjs/observable/defer';

import {
  ActionTypes,
  AddTransferSuccess,
  UpdateTransferSuccess,
  RemoveTransferSuccess
} from '../actions/transfer.action';
import { TransferModel, ITransferModel } from '../models/transfer.model';

@Injectable()
export class TransferEffectsService {

  @Effect({ dispatch: false })
  openDB$: Observable<any> = defer(() => {
    return this.db.open('travel-planning');
  });

  @Effect()
  addTransfer$: Observable<Action> = this.actions$
    .ofType(ActionTypes.ADD_TRANSFER)
    .map((transfer: Action) => (<TransferModel>transfer.payload).toModel())
    .mergeMap((transfer: ITransferModel) =>
      this.db.insert('transfers', [transfer])
        .map(() =>  new AddTransferSuccess(transfer))
    );

  @Effect()
  updateTransfer$: Observable<Action> = this.actions$
    .ofType(ActionTypes.UPDATE_TRANSFER)
    .map((transfer: Action) => transfer.payload)
    .mergeMap((transfers: ITransferModel) =>
      this.db.insert('transfers', [transfers])
        .map(() => new UpdateTransferSuccess(transfers))
    );

  @Effect()
  removeTransfer$: Observable<Action> = this.actions$
    .ofType(ActionTypes.REMOVE_TRANSFER)
    .map((transfer: Action) => <TransferModel>transfer.payload)
    .mergeMap((transfer: TransferModel) => this.db.executeWrite('transfers', 'delete', [ transfer.id ])
      .map(() => {
        this.snackBar.open(`Transfer ${transfer.way} removed successfully!`, null, {duration: 3000});
        return new RemoveTransferSuccess(transfer);
      })
    );

  constructor(private actions$: Actions,
              private db: Database,
              private snackBar: MdSnackBar) { }

}
