/**
 * Created by Surecom-npm on 2/19/2017.
 */
import { Action } from '@ngrx/store';

import { CityModel, ICityModel } from '../models/city.model';
import { ICityDateUpdate } from '../models/city-date-update';

export const ActionTypes = {
  ADD_CITY: '[CITY] ADD_CITY',
  ADD_CITY_SUCCESS: '[CITY] ADD_CITY_SUCCESS',
  REMOVE_CITY: '[CITY] REMOVE_CITY',
  REMOVE_CITY_SUCCESS: '[CITY] REMOVE_CITY_SUCCESS',
  UPDATE_CITIES_DATES: '[CITY] UPDATE_CITIES_DATES',
  UPDATE_CITIES_DATES_SUCCESS: '[CITY] UPDATE_CITIES_DATES_SUCCESS',
  UPDATE_CITY: '[CITY] UPDATE_CITY',
  UPDATE_CITY_SUCCESS: '[CITY] UPDATE_CITY_SUCCESS'
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

const updateCity: Function = (city: ICityModel): Action => {
  return {
    type: ActionTypes.UPDATE_CITY,
    payload: city
  };
};

const updateCitySuccess: Function = (city: ICityModel): Action => {
  return {
    type: ActionTypes.UPDATE_CITY_SUCCESS,
    payload: city
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
  updateCitiesDate,
  updateCitiesDateSuccess,
  updateCity,
  updateCitySuccess,
  addCity,
  addCitySuccess,
  removeCity,
  removeCitySuccess
};
