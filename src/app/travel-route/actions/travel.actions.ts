/**
 * Created by Andrei_Furs on 3/23/2017.
 */
import { Action } from '@ngrx/store';
import { CityExportModel } from '../models/export.model';
import { CityModel } from '../models/city.model';
import { TransferModel } from '../models/transfer.model';

export const ActionTypes = {
  IMPORT_TRAVEL: '[TRAVEL] IMPORT_TRAVEL',
  IMPORT_TRAVEL_SUCCESS: '[TRAVEL] IMPORT_TRAVEL_SUCCESS'
};

const importTravel: Function = (dbElements: CityExportModel[]): Action => {
  return {
    type: ActionTypes.IMPORT_TRAVEL,
    payload: dbElements
  };
};

const importTravelSuccess: Function = (cities: CityModel[], transfers: TransferModel): Action => {
  return {
    type: ActionTypes.IMPORT_TRAVEL_SUCCESS,
    payload: {
      cities,
      transfers
    }
  };
};

export {
  importTravel,
  importTravelSuccess
};
