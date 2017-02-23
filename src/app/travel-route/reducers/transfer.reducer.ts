/**
 * Created by Surecom-npm on 2/22/2017.
 */
import { TransferModel } from '../models/transfer.model';
import { Action } from '@ngrx/store';
import { ActionTypes } from '../actions/transfer.action';
import { sortBy } from 'lodash';

export interface TransferState {
  loading: boolean;
  transfers: TransferModel[];
}

const initialState: TransferState = {
  loading: false,
  transfers: []
};

export function reducer(state: TransferState = initialState, action: Action): TransferState {
  switch (action.type) {
    case ActionTypes.LOAD_TRANSFERS: {
      return {
        loading: true,
        transfers: []
      };
    }
    case ActionTypes.LOAD_TRANSFERS_SUCCESS: {
      return {
        loading: false,
        transfers: action.payload
      };
    }
    case ActionTypes.ADD_TRANSFER_SUCCESS: {
      return {
        loading: false,
        transfers: sortBy(
          [...state.transfers, action.payload],
          (transfer: TransferModel) => transfer.id
        )
      };
    }
    default: {
      return state;
    }
  }
}
