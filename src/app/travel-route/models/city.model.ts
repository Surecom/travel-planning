/**
 * Created by Surecom-npm on 2/19/2017.
 */
import * as moment from 'moment';

import { TravelRoute } from '../common/constants';
import { Model } from './model';

export interface ICityModel {
  id: string;
  to: string;
  from: string;
  title: string;
  description: string;
}

export class CityModel extends Model {
  public to: string;
  public from: string;
  public title: string;
  public description: string;

  constructor(cityModel: ICityModel) {
    super();
    this.to = moment(cityModel.to).format(TravelRoute.DATE_FORMAT);
    this.from = moment(cityModel.from).format(TravelRoute.DATE_FORMAT);
    this.title = cityModel.title;
    this.description = cityModel.description;
  }

  public toModel(): ICityModel {
    return {
      id: this.id,
      to: this.to,
      from: this.from,
      title: this.title,
      description: this.description
    };
  }
}
