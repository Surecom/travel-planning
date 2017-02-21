/**
 * Created by Surecom-npm on 2/19/2017.
 */
import { CityModel } from '../models/city-model';
import { Action } from '@ngrx/store';
import { ActionTypes } from '../travel-route.actions';
import * as moment from 'moment';
import * as _ from 'lodash';
import { TravelRoute } from '../common/constants';

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
      };
    }
    case ActionTypes.LOAD_CITIES_SUCCESS: {
      return {
        loading: false,
        cities: action.payload
      };
    }
    case ActionTypes.ADD_CITY_SUCCESS: {
      return {
        loading: false,
        cities: _.sortBy(
          [...state.cities, action.payload],
          (city: CityModel) => moment(city.from, TravelRoute.DATE_FORMAT).valueOf()
        )
      };
    }
    case ActionTypes.REMOVE_CITY_SUCCESS: {
      return {
        loading: false,
        cities: state.cities.filter((city: CityModel) => city.id !== action.payload.id)
      };
    }
    case ActionTypes.UPDATE_CITIES_DATES: {
      return {
        loading: true,
        cities: state.cities
      };
    }
    case ActionTypes.UPDATE_CITIES_DATES_SUCCESS: {
      const tmp = _.sortBy(
        _.unionBy(action.payload, state.cities, 'id'),
        (city: CityModel) => moment(city.from, TravelRoute.DATE_FORMAT).valueOf()
      );
      return {
        loading: false,
        cities: tmp
      };
    }
    default: {
      return state;
    }
  }
}
