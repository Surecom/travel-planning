/**
 * Created by Aliaksandr_Hladchank on 22-Feb-17.
 */
import * as moment from 'moment';

import { Model } from './model';

export interface ITransferModel {
  id: string;
  cityId: string;
  way: string;
  info: string;
  from: string;
  to: string;
  cost: number;
}

export class TransferModel extends Model {

  public cityId: string;
  public way: string;
  public info: string;
  public from: string;
  public to: string;
  public cost: number;

  constructor(model: ITransferModel) {
    super();
    this.id = (+moment()).toString();
    this.cityId = model.cityId;
    this.way = model.way;
    this.info = model.info;
    this.from = model.from;
    this.to = model.to;
    this.cost = model.cost;
  }

  public toModel(): ITransferModel {
    return {
      id: this.id,
      cityId: this.cityId,
      way: this.way,
      info: this.info,
      from: this.from,
      to: this.to,
      cost: this.cost
    };
  }
}
