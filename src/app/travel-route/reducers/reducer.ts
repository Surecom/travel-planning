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

const initialState: TravelState = {
  loading: false,
  cities: [],
  transfers: [],
  travels: [],
  currentTravelId: ''
};

export function reducer(state: TravelState = initialState, action: Action): TravelState {
  switch (action.type) {
    // Loaders
    case ActionTypesTravel.LOAD_TRAVELS: {
      return Object.assign({}, state, {
        loading: true,
        travels: []
      });
    }
    case ActionTypesTravel.LOAD_TRAVELS_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        travels: action.payload
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
    case ActionTypes.UPDATE_CITIES_DATES_SUCCESS: {
      const tmp = sortBy(
        unionBy(action.payload, state.cities, 'id'),
        (city: CityModel) => +moment(city.from, TravelRouteConstants.DATE_FORMAT)
      );
      return Object.assign({}, state, {
        loading: false,
        cities: tmp
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
    case ActionTypesTravel.UPDATE_TRAVEL_SUCCESS: {
      const tmp = [];
      for (let i = 0; i < state.travels.length; i++) {
        tmp.push(state.travels[i].id === action.payload.id ? action.payload : state.travels[i]);
      }
      return Object.assign({}, state, {
        loading: false,
        travels: tmp
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
          (city: CityModel) => +moment(city.from, TravelRouteConstants.DATE_FORMAT)
        )
      });
    }
    case ActionTypesTravel.ADD_TRAVEL_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        travels: [...state.travels, action.payload]
      });
    }
    // Removers
    case ActionTypesTransfer.REMOVE_TRANSFER_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        transfers: state.transfers.filter((transfer: TransferModel) => transfer.id !== action.payload.id) || []
      });
    }
    case ActionTypes.REMOVE_CITY_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        cities: state.cities.filter((city: CityModel) => city.id !== action.payload.id) || [],
        transfers: state.transfers.filter((transfer: TransferModel) => transfer.cityId !== action.payload.id) || []
      });
    }
    case ActionTypesTravel.REMOVE_TRAVEL_SUCCESS: {
      const tmp: Array<TransferModel> = [];
      for (let i = 0; i < state.cities.length; i++) {
        for (let j = 0; j < state.transfers.length; j++) {
          if (state.cities[i].travelId !== action.payload.id) {
            tmp.push(state.transfers[j]);
          }
        }
      }
      return Object.assign({}, state, {
        loading: false,
        cities: state.cities.filter((city: CityModel) => city.travelId !== action.payload.id) || [],
        transfers: tmp,
        travels: state.travels.filter((travel: TravelModel) => travel.id !== action.payload.id) || []
      });
    }
    // Importers
    case ActionTypesTravel.IMPORT_TRAVEL: {
      return Object.assign({}, state, {
        loading: true
      });
    }
    case ActionTypesTravel.IMPORT_TRAVEL_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        currentTravelId: action.payload
      });
    }
    // Setters
    case ActionTypesTravel.SET_CURRENT_TRAVEL: {
      return Object.assign({}, state, {
        loading: true,
        currentTravelId: action.payload
      });
    }
    case ActionTypesTravel.SET_CURRENT_TRAVEL_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        cities: action.payload.cities,
        transfers: action.payload.transfers
      });
    }
    default: {
      return state;
    }
  }
}
