/**
 * Created by Surecom-npm on 2/19/2017.
 */
import { CityModel } from '../models/city-model';
import { Action } from '@ngrx/store';
import { ActionTypes } from '../travel-route.actions';

export interface CityState {
  loading: boolean;
  cities: CityModel[];
}

const initialState: CityState = {
  loading: false,
  cities: []
};

export function reducer(state: CityState = initialState, action: Action): CityState {
  switch (action.type) {
    case ActionTypes.LOAD_CITIES: {
      return {
        loading: true,
        cities: []
      }
    }
    case ActionTypes.LOAD_CITIES_SUCCESS: {
      return {
        loading: false,
        cities: action.payload
      }
    }
    case ActionTypes.ADD_CITY_SUCCESS: {
      return {
        loading: false,
        cities: [...state.cities, action.payload]
      }
    }
    case ActionTypes.REMOVE_CITY_SUCCESS: {
      return {
        loading: false,
        cities: state.cities.filter((city: CityModel) => city.id !== action.payload.id)
      }
    }
    default: {
      return state;
    }
  }
}
