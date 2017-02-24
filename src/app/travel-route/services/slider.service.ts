import { Injectable } from '@angular/core';

import * as moment from 'moment';

import { TravelRoute } from '../common/constants';

@Injectable()
export class SliderService {

  private _currentOptions: any;

  constructor() { }

  get defaultOptions() {
    return {
      connect: true,
      step: 1000 * 60 * 60 * 24,
      margin: 1000 * 60 * 60 * 24,
      behaviour: 'tap-drag',
      tooltips: true,
      format: {
        to: value => moment(Math.floor(value)).format(TravelRoute.DATE_FORMAT),
        from: value => value
      }
    };
  }

  set currentOptions(value: any) {
    this._currentOptions = value;
  }

  get currentOptions() {
    return this._currentOptions;
  }
}
