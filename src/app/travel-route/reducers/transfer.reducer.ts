/**
 * Created by Surecom-npm on 2/22/2017.
 */
import { Action } from '@ngrx/store';

import { TransferModel } from '../models/transfer.model';
import { ActionTypes } from '../actions/transfer.action';

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
    case ActionTypes.UPDATE_TRANSFER: {
      return {
        loading: true,
        transfers: state.transfers
      };
    }
    case ActionTypes.UPDATE_TRANSFER_SUCCESS: {
      const tmp = [];
      for (let i = 0; i < state.transfers.length; i++) {
        tmp.push(state.transfers[i].id === action.payload.id ? action.payload : state.transfers[i]);
      }
      return {
        loading: false,
        transfers: tmp
      };
    }
    case ActionTypes.ADD_TRANSFER: {
      return {
        loading: true,
        transfers: state.transfers
      };
    }
    case ActionTypes.ADD_TRANSFER_SUCCESS: {
      return {
        loading: false,
        transfers: [...state.transfers, action.payload]
      };
    }
    case ActionTypes.REMOVE_TRANSFER_SUCCESS: {
      return {
        loading: false,
        transfers: state.transfers.filter((transfer: TransferModel) => transfer.id !== action.payload.id)
      };
    }
    default: {
      return state;
    }
  }
}
