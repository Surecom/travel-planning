import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

import { TransferModel } from '../models/transfer.model';
import { TravelRoute } from '../common/constants';

@Component({
  selector: '[transfer-view]',
  templateUrl: './transfer-view.component.html',
  styleUrls: ['./transfer-view.component.scss']
})
export class TransferViewComponent implements OnInit {

  @Input()
  public transfer: TransferModel;

  @Output()
  public edit: EventEmitter<TransferModel> = new EventEmitter();

  @Output()
  public remove: EventEmitter<TransferModel> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getTotalTransferTime(transfer: TransferModel): string {
    const tmpTo = +moment(transfer.to, TravelRoute.TIME_FORMAT);
    const tmpFrom = +moment(transfer.from, TravelRoute.TIME_FORMAT);
    let totalTime: string;
    if (tmpFrom > tmpTo) {
      totalTime = moment(moment('24:00', TravelRoute.TIME_FORMAT).diff(moment(tmpFrom - tmpTo))).format(TravelRoute.TIME_FORMAT);
    } else {
      totalTime = moment(tmpTo - tmpFrom).utc().format(TravelRoute.TIME_FORMAT);
    }
    return `Total transfer time is ${totalTime}`;
  }
}
