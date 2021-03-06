/**
 * Created by Surecom-npm on 2/22/2017.
 */
import { Action } from '@ngrx/store';
import { TransferModel, ITransferModel } from '../models/transfer.model';

export const ActionTypes = {
  ADD_TRANSFER: '[TRANSFER] ADD_TRANSFER',
  ADD_TRANSFER_SUCCESS: '[TRANSFER] ADD_TRANSFER_SUCCESS',
  REMOVE_TRANSFER: '[TRANSFER] REMOVE_TRANSFER',
  REMOVE_TRANSFER_SUCCESS: '[TRANSFER] REMOVE_TRANSFER_SUCCESS',
  UPDATE_TRANSFER: '[TRANSFER] UPDATE_TRANSFER',
  UPDATE_TRANSFER_SUCCESS: '[TRANSFER] UPDATE_TRANSFER_SUCCESS'
};

class AddTransfer implements Action {
  type = ActionTypes.ADD_TRANSFER;

  constructor(public payload: TransferModel) { }
}

class AddTransferSuccess implements Action {
  type = ActionTypes.ADD_TRANSFER_SUCCESS;

  constructor(public payload: ITransferModel) { }
}

class UpdateTransfer implements Action {
  type = ActionTypes.UPDATE_TRANSFER;

  constructor(public payload: ITransferModel) { }
}

class UpdateTransferSuccess implements Action {
  type = ActionTypes.UPDATE_TRANSFER_SUCCESS;

  constructor(public payload: ITransferModel) { }
}

class RemoveTransfer implements Action {
  type = ActionTypes.REMOVE_TRANSFER;

  constructor(public payload: TransferModel) { }
}

class RemoveTransferSuccess implements Action {
  type = ActionTypes.REMOVE_TRANSFER_SUCCESS;

  constructor(public payload: TransferModel) { }
}

export {
  UpdateTransfer,
  UpdateTransferSuccess,
  AddTransfer,
  AddTransferSuccess,
  RemoveTransfer,
  RemoveTransferSuccess
};

