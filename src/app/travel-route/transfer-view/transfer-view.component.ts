import { Component, OnInit, Input, Output, EventEmitter, SkipSelf } from '@angular/core';

import { TransferModel } from '../models/transfer.model';
import { TravelRouteConstants } from '../common/constants';
import { TransferListComponent } from '../transfer-list/transfer-list.component';

@Component({
  selector: '[transfer-view]',
  templateUrl: './transfer-view.component.html',
  styleUrls: ['./transfer-view.component.scss']
})
export class TransferViewComponent implements OnInit {

  @Input()
  public transfer: TransferModel;

  @Input()
  public message: string;

  @Output()
  public edit: EventEmitter<TransferModel> = new EventEmitter();

  @Output()
  public remove: EventEmitter<TransferModel> = new EventEmitter();

  constructor(@SkipSelf() private transferList: TransferListComponent) { }

  ngOnInit() {}

  getTotalTransferTime(transfer: TransferModel): string {
    const transferTime = this.transferList.getTotalTransferTime(transfer.from, transfer.to).format(TravelRouteConstants.TIME_FORMAT);
    return `Total transfer time is ${transferTime}`;
  }
}
