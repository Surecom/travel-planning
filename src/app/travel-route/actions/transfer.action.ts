/**
 * Created by Surecom-npm on 2/22/2017.
 */
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { TransferModel, ITransferModel } from '../models/transfer.model';

export const ActionTypes = {
  LOAD_TRANSFERS: '[TRANSFER] LOAD_TRANSFERS',
  LOAD_TRANSFERS_SUCCESS: '[TRANSFER] LOAD_TRANSFERS_SUCCESS',
  ADD_TRANSFER: '[TRANSFER] ADD_TRANSFER',
  ADD_TRANSFER_SUCCESS: '[TRANSFER] ADD_TRANSFER_SUCCESS',
  REMOVE_TRANSFER: '[TRANSFER] REMOVE_TRANSFER',
  REMOVE_TRANSFER_SUCCESS: '[TRANSFER] REMOVE_TRANSFER_SUCCESS',
  UPDATE_TRANSFERS_DATES: '[TRANSFER] UPDATE_TRANSFERS_DATES',
  UPDATE_TRANSFERS_DATES_SUCCESS: '[TRANSFER] UPDATE_TRANSFERS_DATES_SUCCESS'
};


const loadTransfers: Function = (): Action => {
  return {
    type: ActionTypes.LOAD_TRANSFERS,
    payload: {}
  };
};

const loadTransfersSuccess: Function = (cities: Observable<TransferModel[]>): Action => {
  return {
    type: ActionTypes.LOAD_TRANSFERS_SUCCESS,
    payload: cities
  };
};

const addTransfer: Function = (city: TransferModel): Action => {
  return {
    type: ActionTypes.ADD_TRANSFER,
    payload: city
  };
};

const addTransferSuccess: Function = (city: TransferModel): Action => {
  return {
    type: ActionTypes.ADD_TRANSFER_SUCCESS,
    payload: city
  };
};

const updateTransfersDate: Function = (citiesDate: ITransferModel[]): Action => {
  return {
    type: ActionTypes.UPDATE_TRANSFERS_DATES,
    payload: citiesDate
  };
};

const updateTransfersDateSuccess: Function = (citiesDate: ITransferModel[]): Action => {
  return {
    type: ActionTypes.UPDATE_TRANSFERS_DATES_SUCCESS,
    payload: citiesDate
  };
};

const removeTransfer: Function = (city: TransferModel): Action => {
  return {
    type: ActionTypes.REMOVE_TRANSFER,
    payload: city
  };
};

const removeTransferSuccess: Function = (city: TransferModel): Action => {
  return {
    type: ActionTypes.REMOVE_TRANSFER_SUCCESS,
    payload: city
  };
};

export {
  loadTransfers,
  loadTransfersSuccess,
  updateTransfersDate,
  updateTransfersDateSuccess,
  addTransfer,
  addTransferSuccess,
  removeTransfer,
  removeTransferSuccess
};

