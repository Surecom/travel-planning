/**
 * Created by Surecom-npm on 2/19/2017.
 */
import { Action } from '@ngrx/store';
import * as moment from 'moment';
import { sortBy, unionBy } from 'lodash';

import { CityModel } from '../models/city.model';
import { ActionTypes } from '../actions/city.actions';
import { ActionTypes as  ActionTypesTravel} from '../actions/travel.actions';
import { ActionTypes as  ActionTypesTransfer} from '../actions/transfer.action';
import { TravelRoute } from '../common/constants';
import { TransferModel } from '../models/transfer.model';

export interface TravelState {
  loading: boolean;
  cities: CityModel[];
  transfers: TransferModel[];
}

const initialState: TravelState = {
  loading: false,
  cities: [],
  transfers: []
};


export function reducer(state: TravelState = initialState, action: Action): TravelState {
  switch (action.type) {
    // Loaders
    case ActionTypesTransfer.LOAD_TRANSFERS: {
      return Object.assign({}, state, {
        loading: true,
        transfers: []
      });
    }
    case ActionTypesTransfer.LOAD_TRANSFERS_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        transfers: action.payload
      });
    }
    case ActionTypes.LOAD_CITIES: {
      return Object.assign({}, state, {
        loading: true,
        cities: []
      });
    }
    case ActionTypes.LOAD_CITIES_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        cities: action.payload
      });
    }
    // Updaters
    case ActionTypesTransfer.UPDATE_TRANSFER: {
      return Object.assign({}, state, {
        loading: true,
        transfers: state.transfers
      });
    }
    case ActionTypesTransfer.UPDATE_TRANSFER_SUCCESS: {
      const tmp = [];
      for (let i = 0; i < state.transfers.length; i++) {
        tmp.push(state.transfers[i].id === action.payload.id ? action.payload : state.transfers[i]);
      }
      return Object.assign({}, state, {
        loading: false,
        transfers: tmp
      });
    }
    case ActionTypes.UPDATE_CITIES_DATES: {
      return Object.assign({}, state, {
        loading: true,
        cities: state.cities
      });
    }
    case ActionTypes.UPDATE_CITY_SUCCESS: {
      const tmp = [];
      for (let i = 0; i < state.cities.length; i++) {
        tmp.push(state.cities[i].id === action.payload.id ? action.payload : state.cities[i]);
      }
      return Object.assign({}, state, {
        loading: false,
        cities: tmp
      });
    }
    case ActionTypes.UPDATE_CITIES_DATES_SUCCESS: {
      const tmp = sortBy(
        unionBy(action.payload, state.cities, 'id'),
        (city: CityModel) => +moment(city.from, TravelRoute.DATE_FORMAT)
      );
      return Object.assign({}, state, {
        loading: false,
        cities: tmp
      });
    }
    // Adders
    case ActionTypesTransfer.ADD_TRANSFER: {
      return Object.assign({}, state, {
        loading: true,
        transfers: state.transfers
      });
    }
    case ActionTypesTransfer.ADD_TRANSFER_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        transfers: [...state.transfers, action.payload]
      });
    }
    case ActionTypes.ADD_CITY_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        cities: sortBy(
          [...state.cities, action.payload],
          (city: CityModel) => +moment(city.from, TravelRoute.DATE_FORMAT)
        )
      });
    }
    // Removers
    case ActionTypesTransfer.REMOVE_TRANSFER_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        transfers: state.transfers.filter((transfer: TransferModel) => transfer.id !== action.payload.id)
      });
    }
    case ActionTypes.REMOVE_CITY_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        cities: state.cities.filter((city: CityModel) => city.id !== action.payload.id)
      });
    }
    // Importers
    case ActionTypesTravel.IMPORT_TRAVEL: {
      return Object.assign({}, state, {
        loading: true
      });
    }
    case ActionTypesTravel.IMPORT_TRAVEL_SUCCESS: {
      return {
        loading: false,
        cities: sortBy(
          action.payload.cities,
          (city: CityModel) => +moment(city.from, TravelRoute.DATE_FORMAT)
        ),
        transfers: action.payload.transfers
      };
    }
    default: {
      return state;
    }
  }
}
