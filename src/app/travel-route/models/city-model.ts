/**
 * Created by Surecom-npm on 2/19/2017.
 */
import * as moment from 'moment';
import { TravelRoute } from '../common/constants';

export interface ICityModel {
  id?: string;
  to: string;
  from: string;
  title: string;
  description: string;
}

export class CityModel {
  public id: string;
  public to: string;
  public from: string;
  public title: string;
  public description: string;

  constructor(cityModel: ICityModel) {
    this.id = this.guid();
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

  private guid: () => string = (): string =>
    this.s4() + this.s4() + '-' +
    this.s4() + '-' +
    this.s4() + '-' +
    this.s4() + '-' +
    this.s4() + this.s4() + this.s4();

  private s4: () => string = (): string => Math.floor((1 + Math.random()) * 0x10000)
    .toString(16).substring(1);
}
