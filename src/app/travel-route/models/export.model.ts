/**
 * Created by Andrei_Furs on 3/16/2017.
 */

interface ITransferExport {
  cost: string;
  info: string;
  from: string;
  way: string;
  to: string;
  order: string;
}

export class CityExportModel {
  public cost: string;
  public description: string;
  public from: string;
  public title: string;
  public to: string;
  public transfers: ITransferExport[];
  public travelId: string;

  constructor() {
    this.cost = '';
    this.description = '';
    this.from = '';
    this.title = '';
    this.to = '';
    this.travelId = '';
    this.transfers = [];
  }
}

export class TransferExportModel {
  public cost: string;
  public info: string;
  public from: string;
  public way: string;
  public to: string;
  public order: string;

  constructor() {
    this.cost = '';
    this.info = '';
    this.from = '';
    this.way = '';
    this.to = '';
    this.order = '';
  }
}
