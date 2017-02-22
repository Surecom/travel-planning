/**
 * Created by Aliaksandr_Hladchank on 22-Feb-17.
 */
import {Model} from './model';

export interface ITransfer {
  way: string;
  info: string;
  from: string;
  to: string;
}

export interface ICityTransferModel {
  id: string;
  cityId: string;
  transfer: ITransfer;
}

export class CityTransferModel extends Model {

  public cityId: string;
  public transfer: ITransfer;

  constructor(model: ICityTransferModel) {
    super();
    this.cityId = model.cityId;
    this.transfer = model.transfer;
  }
}
