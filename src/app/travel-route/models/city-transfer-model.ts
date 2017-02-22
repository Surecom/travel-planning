/**
 * Created by Aliaksandr_Hladchank on 22-Feb-17.
 */
import {Model} from './model';

export interface ICityTransferModel {
  id: string;
  cityId: string;
  way: string;
  info: string;
  from: string;
  to: string;
}

export class CityTransferModel extends Model {

  public cityId: string;
  public way: string;
  public info: string;
  public from: string;
  public to: string;

  constructor(model: ICityTransferModel) {
    super();
    this.cityId = model.cityId;
    this.way = model.way;
    this.info = model.info;
    this.from = model.from;
    this.to = model.to;
  }
}
