/**
 * Created by Surecom-npm on 2/19/2017.
 */
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { CityModel } from './models/city-model';
import { IUpdateModel } from './models/update-model';

export const ActionTypes = {
  LOAD_CITIES: 'LOAD_CITIES',
  LOAD_CITIES_SUCCESS: 'LOAD_CITIES_SUCCESS',
  ADD_CITY: 'ADD_CITY',
  ADD_CITY_SUCCESS: 'ADD_CITY_SUCCESS',
  REMOVE_CITY: 'REMOVE_CITY',
  REMOVE_CITY_SUCCESS: 'REMOVE_CITY_SUCCESS',
  UPDATE_CITIES_DATES: 'UPDATE_CITIES_DATES',
  UPDATE_CITIES_DATES_SUCCESS: 'UPDATE_CITIES_DATES_SUCCESS'
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

const updateCitiesDate: Function = (citiesDate: IUpdateModel[]): Action => {
  return {
    type: ActionTypes.UPDATE_CITIES_DATES,
    payload: citiesDate
  };
};

const updateCitiesDateSuccess: Function = (citiesDate: IUpdateModel[]): Action => {
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
