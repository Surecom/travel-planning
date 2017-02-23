/**
 * Created by Surecom-npm on 2/19/2017.
 */
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { CityModel } from '../models/city.model';
import { ICityDateUpdate } from '../models/city-date-update';

export const ActionTypes = {
  LOAD_CITIES: '[CITY] LOAD_CITIES',
  LOAD_CITIES_SUCCESS: '[CITY] LOAD_CITIES_SUCCESS',
  ADD_CITY: '[CITY] ADD_CITY',
  ADD_CITY_SUCCESS: '[CITY] ADD_CITY_SUCCESS',
  REMOVE_CITY: '[CITY] REMOVE_CITY',
  REMOVE_CITY_SUCCESS: '[CITY] REMOVE_CITY_SUCCESS',
  UPDATE_CITIES_DATES: '[CITY] UPDATE_CITIES_DATES',
  UPDATE_CITIES_DATES_SUCCESS: '[CITY] UPDATE_CITIES_DATES_SUCCESS'
};

const loadCities: Function = (): Action => {
  return {
    type: ActionTypes.LOAD_CITIES,
    payload: {}
  };
};

const loadCitiesSuccess: Function = (cities: Observable<CityModel[]>): Action => {
  return {
    type: ActionTypes.LOAD_CITIES_SUCCESS,
    payload: cities
  };
};

const addCity: Function = (city: CityModel): Action => {
  return {
    type: ActionTypes.ADD_CITY,
    payload: city
  };
};

const addCitySuccess: Function = (city: CityModel): Action => {
  return {
    type: ActionTypes.ADD_CITY_SUCCESS,
    payload: city
  };
};

const updateCitiesDate: Function = (citiesDate: ICityDateUpdate[]): Action => {
  return {
    type: ActionTypes.UPDATE_CITIES_DATES,
    payload: citiesDate
  };
};

const updateCitiesDateSuccess: Function = (citiesDate: ICityDateUpdate[]): Action => {
  return {
    type: ActionTypes.UPDATE_CITIES_DATES_SUCCESS,
    payload: citiesDate
  };
};

const removeCity: Function = (city: CityModel): Action => {
  return {
    type: ActionTypes.REMOVE_CITY,
    payload: city
  };
};

const removeCitySuccess: Function = (city: CityModel): Action => {
  return {
    type: ActionTypes.REMOVE_CITY_SUCCESS,
    payload: city
  };
};

export {
  loadCities,
  loadCitiesSuccess,
  updateCitiesDate,
  updateCitiesDateSuccess,
  addCity,
  addCitySuccess,
  removeCity,
  removeCitySuccess
};
