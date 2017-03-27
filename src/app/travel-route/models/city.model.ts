/**
 * Created by Surecom-npm on 2/19/2017.
 */
import { Model } from './model';

export interface ICityModel {
  id?: string;
  to: string;
  from: string;
  title: string;
  description: string;
  cost: number;
}

export class CityModel extends Model {
  public to: string;
  public from: string;
  public title: string;
  public description: string;
  public cost: number;

  constructor(cityModel: ICityModel) {
    super();
    this.to = cityModel.to;
    this.from = cityModel.from;
    this.title = cityModel.title;
    this.description = cityModel.description;
    this.cost = cityModel.cost;
  }

  public toModel(): ICityModel {
    return {
      id: this.id,
      to: this.to,
      from: this.from,
      title: this.title,
      description: this.description,
      cost: this.cost
    };
  }
}
