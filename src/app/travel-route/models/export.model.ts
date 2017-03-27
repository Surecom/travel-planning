/**
 * Created by Andrei_Furs on 3/16/2017.
 */

interface ICityExport {
  cost: string;
  description: string;
  from: string;
  title: string;
  to: string;
  transfers: ITransferExport[];
}
interface ITransferExport {
  cost: string;
  info: string;
  from: string;
  way: string;
  to: string;
}

export class CityExportModel {
  public cost: string;
  public description: string;
  public from: string;
  public title: string;
  public to: string;
  public transfers: ITransferExport[];

  constructor() {
    this.cost = '';
    this.description = '';
    this.from = '';
    this.title = '';
    this.to = '';
    this.transfers = [];
  }
}

export class TransferExportModel {
  public cost: string;
  public info: string;
  public from: string;
  public way: string;
  public to: string;

  constructor() {
    this.cost = '';
    this.info = '';
    this.from = '';
    this.way = '';
    this.to = '';
  }
}
