/**
 * Created by Aliaksandr_Hladchank on 22-Feb-17.
 */
import { Model } from './model';

export interface ITransferModel {
  id?: string;
  cityId: string;
  way: string;
  info: string;
  from: string;
  to: string;
  cost: number;
  order: number;
}

export class TransferModel extends Model {

  public cityId: string;
  public way: string;
  public info: string;
  public from: string;
  public to: string;
  public cost: number;
  public order: number;

  constructor(model: ITransferModel, order?: number) {
    super();
    this.cityId = model.cityId;
    this.way = model.way;
    this.info = model.info;
    this.from = model.from;
    this.to = model.to;
    this.cost = model.cost;
    this.order = order || model.order;
  }

  public toModel(): ITransferModel {
    return {
      id: this.id,
      cityId: this.cityId,
      way: this.way,
      info: this.info,
      from: this.from,
      to: this.to,
      cost: this.cost,
      order: this.order
    };
  }
}
