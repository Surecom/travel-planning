/**
 * Created by Andrei_Furs on 3/23/2017.
 */
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ITravelModel, TravelModel } from '../models/travel.model';
import { CityModel } from '../models/city.model';
import { TransferModel } from '../models/transfer.model';
import { IDBElements } from '../types';

export const ActionTypes = {
  ADD_TRAVEL: '[TRAVEL] ADD_TRAVEL',
  ADD_TRAVEL_SUCCESS: '[TRAVEL] ADD_TRAVEL_SUCCESS',
  LOAD_TRAVELS: '[TRAVEL] LOAD_TRAVELS',
  LOAD_TRAVELS_SUCCESS: '[TRAVEL] LOAD_TRAVELS_SUCCESS',
  SET_CURRENT_TRAVEL: '[TRAVEL] SET_CURRENT_TRAVEL',
  SET_CURRENT_TRAVEL_SUCCESS: '[TRAVEL] SET_CURRENT_TRAVEL_SUCCESS',
  REMOVE_TRAVEL: '[TRAVEL] REMOVE_TRAVEL',
  REMOVE_TRAVEL_SUCCESS: '[TRAVEL] REMOVE_TRAVEL_SUCCESS',
  UPDATE_TRAVEL: '[TRAVEL] UPDATE_TRAVEL',
  UPDATE_TRAVEL_SUCCESS: '[TRAVEL] UPDATE_TRAVEL_SUCCESS',
  IMPORT_TRAVEL: '[TRAVEL] IMPORT_TRAVEL',
  IMPORT_TRAVEL_SUCCESS: '[TRAVEL] IMPORT_TRAVEL_SUCCESS'
};

const loadTravels: Function = (): Action => {
  return {
    type: ActionTypes.LOAD_TRAVELS,
    payload: {}
  };
};

const loadTravelsSuccess: Function = (travels: Observable<TravelModel[]>): Action => {
  return {
    type: ActionTypes.LOAD_TRAVELS_SUCCESS,
    payload: travels
  };
};

const importTravel: Function = (dbElements: IDBElements): Action => {
  return {
    type: ActionTypes.IMPORT_TRAVEL,
    payload: dbElements
  };
};

const importTravelSuccess: Function = (cities: CityModel[], transfers: TransferModel[], travel: TravelModel): Action => {
  return {
    type: ActionTypes.IMPORT_TRAVEL_SUCCESS,
    payload: {
      cities,
      transfers,
      travel
    }
  };
};

const addTravel: Function = (travel: TravelModel): Action => {
  return {
    type: ActionTypes.ADD_TRAVEL,
    payload: travel
  };
};

const addTravelSuccess: Function = (travel: TravelModel): Action => {
  return {
    type: ActionTypes.ADD_TRAVEL_SUCCESS,
    payload: travel
  };
};

const setCurrentTravel: Function = (travelId: string): Action => {
  return {
    type: ActionTypes.SET_CURRENT_TRAVEL,
    payload: travelId
  };
};

const setCurrentTravelSuccess: Function = (cities: CityModel[], transfers: TransferModel[]): Action => {
  return {
    type: ActionTypes.SET_CURRENT_TRAVEL_SUCCESS,
    payload: {
      cities,
      transfers
    }
  };
};

const removeTravel: Function = (travel: TravelModel): Action => {
  return {
    type: ActionTypes.REMOVE_TRAVEL,
    payload: travel
  };
};

const removeTravelSuccess: Function = (travel: TravelModel): Action => {
  return {
    type: ActionTypes.REMOVE_TRAVEL_SUCCESS,
    payload: travel
  };
};

const updateTravel: Function = (travel: ITravelModel): Action => {
  return {
    type: ActionTypes.UPDATE_TRAVEL,
    payload: travel
  };
};

const updateTravelSuccess: Function = (travel: ITravelModel): Action => {
  return {
    type: ActionTypes.UPDATE_TRAVEL_SUCCESS,
    payload: travel
  };
};

export {
  loadTravels,
  loadTravelsSuccess,
  importTravel,
  importTravelSuccess,
  addTravel,
  addTravelSuccess,
  setCurrentTravel,
  setCurrentTravelSuccess,
  removeTravel,
  removeTravelSuccess,
  updateTravel,
  updateTravelSuccess
};
