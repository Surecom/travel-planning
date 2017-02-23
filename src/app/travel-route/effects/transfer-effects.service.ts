import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Database } from '@ngrx/db';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { defer } from 'rxjs/observable/defer';

import { ActionTypes, loadTransfersSuccess, addTransferSuccess } from '../actions/transfer.action';
import { TransferModel, ITransferModel } from '../models/transfer.model';

@Injectable()
export class TransferEffectsService {

  @Effect({ dispatch: false })
  openDB$: Observable<any> = defer(() => {
    return this.db.open('travel-planning');
  });

  @Effect()
  loadTransfers$: Observable<Action> =
    this.actions$
      .ofType(ActionTypes.LOAD_TRANSFERS)
      .switchMap(() =>
        this.db.query('transfers')
          .toArray()
          .map((transfers: TransferModel[]) => loadTransfersSuccess(transfers))
      );

  @Effect()
  addCity$: Observable<Action> = this.actions$
    .ofType(ActionTypes.ADD_TRANSFER)
    .map((transfer: Action) => (<TransferModel>transfer.payload).toModel())
    .mergeMap((transfer: ITransferModel) =>
      this.db.insert('transfers', [transfer])
        .map(() => {
          return addTransferSuccess(transfer);
        })
    );

  constructor(private actions$: Actions,
              private db: Database) { }

}
