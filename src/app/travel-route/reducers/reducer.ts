/**
 * Created by Surecom-npm on 2/19/2017.
 */
import { Action } from '@ngrx/store';
import * as moment from 'moment';
import { sortBy, unionBy } from 'lodash';
import { Map, List } from 'immutable';

import { CityModel } from '../models/city.model';
import { ActionTypes } from '../actions/city.actions';
import { ActionTypes as  ActionTypesTravel } from '../actions/travel.actions';
import { ActionTypes as  ActionTypesTransfer } from '../actions/transfer.action';
import { TravelRouteConstants } from '../common/constants';
import { TransferModel } from '../models/transfer.model';
import { TravelModel } from '../models/travel.model';

export interface TravelState {
  loading: boolean;
  cities: CityModel[];
  transfers: TransferModel[];
  travels: TravelModel[];
  currentTravelId: string;
}

const initialState = Map({
  loading: false,
  cities: List<CityModel>(),
  transfers: List<TransferModel>(),
  travels: List<TravelModel>(),
  currentTravelId: ''
});

export function reducer(state = initialState, action: Action) {
  switch (action.type) {
    // Loaders
    case ActionTypesTravel.LOAD_TRAVELS: {
      return state.set('loading', true)
        .setIn(['travels'], List());
    }
    case ActionTypesTravel.LOAD_TRAVELS_SUCCESS: {
      return state.set('loading', false)
        .setIn(['travels'], List(action.payload));
    }
    // Updaters
    case ActionTypesTransfer.UPDATE_TRANSFER: {
      return state.set('loading', true);
    }
    case ActionTypesTransfer.UPDATE_TRANSFER_SUCCESS: {
      return state.set('loading', false)
        .updateIn(['transfers'],
          transfers => {
            const tmp = [];
            for (let i = 0; i < transfers.toJS().length; i++) {
              tmp.push(transfers.toJS()[i].id === action.payload.id ? action.payload : transfers.toJS()[i]);
            }
            return List(tmp);
          });
    }
    case ActionTypes.UPDATE_CITIES_DATES: {
      return state.set('loading', true);
    }
    case ActionTypes.UPDATE_CITIES_DATES_SUCCESS: {
      return state.set('loading', false)
        .updateIn(['cities'],
          cities => List(sortBy(
            unionBy(action.payload, cities.toJS(), 'id'),
            (city: CityModel) => +moment(city.from, TravelRouteConstants.DATE_FORMAT)
          ))
        );
    }
    case ActionTypes.UPDATE_CITY_SUCCESS: {
      return state.set('loading', false)
        .updateIn(['cities'],
          cities => {
            const tmp = [];
            for (let i = 0; i < cities.toJS().length; i++) {
              tmp.push(cities.toJS()[i].id === action.payload.id ? action.payload : cities.toJS()[i]);
            }
            return List(tmp);
          });
    }
    case ActionTypesTravel.UPDATE_TRAVEL_SUCCESS: {
      return state.set('loading', false)
        .updateIn(['travels'],
          travels => {
            const tmp = [];
            for (let i = 0; i < travels.toJS().length; i++) {
              tmp.push(travels.toJS()[i].id === action.payload.id ? action.payload : travels.toJS()[i]);
            }
            return List(tmp);
          });
    }
    // Adders
    case ActionTypesTransfer.ADD_TRANSFER: {
      return state.set('loading', true);
    }
    case ActionTypesTransfer.ADD_TRANSFER_SUCCESS: {
      return state.set('loading', false)
        .updateIn(['transfers'], transfers => transfers.push(action.payload));
    }
    case ActionTypes.ADD_CITY_SUCCESS: {
      return state.set('loading', false)
        .updateIn(['cities'],
          cities => List(sortBy(
            cities.push(action.payload).toJS(),
            (city: CityModel) => +moment(city.from, TravelRouteConstants.DATE_FORMAT)
          ))
        );
    }
    case ActionTypesTravel.ADD_TRAVEL_SUCCESS: {
      return state.set('loading', false)
        .updateIn(['travels'], travels => travels.push(action.payload));
    }
    // Removers
    case ActionTypesTransfer.REMOVE_TRANSFER_SUCCESS: {
      return state.set('loading', false)
        .updateIn(['transfers'],
          transfers => transfers.filter((transfer: TransferModel) => transfer.id !== action.payload.id) || List([]));
    }
    case ActionTypes.REMOVE_CITY_SUCCESS: {
      return state.set('loading', false)
        .updateIn(['cities'],
          cities => cities.filter((city: CityModel) => city.id !== action.payload.id) || List([]))
        .updateIn(['transfers'],
          transfers => transfers.filter((transfer: TransferModel) => transfer.cityId !== action.payload.id) || List([]));
    }
    case ActionTypesTravel.REMOVE_TRAVEL_SUCCESS: {
      return state.set('loading', false)
        .setIn(['cities'], List([]))
        .updateIn(['travels'],
          travels => travels.filter((travel: TravelModel) => travel.id !== action.payload.id) || List([]))
        .setIn(['transfers'], List([]));
    }
    // Importers
    case ActionTypesTravel.IMPORT_TRAVEL: {
      return state.set('loading', true);
    }
    case ActionTypesTravel.IMPORT_TRAVEL_SUCCESS: {
      return state.set('loading', false)
        .setIn(['currentTravelId'], action.payload.travel.id)
        .updateIn(['travels'], travels => travels.push(action.payload.travel))
        .setIn(['cities'], List(sortBy(
          action.payload.cities,
          (city: CityModel) => +moment(city.from, TravelRouteConstants.DATE_FORMAT)
        )))
        .setIn(['transfers'], List(action.payload.transfers));
    }
    // Setters
    case ActionTypesTravel.SET_CURRENT_TRAVEL: {
      return state.set('loading', true)
        .setIn(['currentTravelId'], action.payload);
    }
    case ActionTypesTravel.SET_CURRENT_TRAVEL_SUCCESS: {
      return state.set('loading', false)
        .setIn(['cities'], List(
          sortBy(
            action.payload.cities,
            (city: CityModel) => +moment(city.from, TravelRouteConstants.DATE_FORMAT)
          )
        ))
        .setIn(['transfers'], List(action.payload.transfers));
    }
    default: {
      return state;
    }
  }
}
