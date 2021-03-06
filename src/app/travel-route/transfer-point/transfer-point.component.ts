import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { TransferModel, ITransferModel } from '../models/transfer.model';
import { CityModel } from '../models/city.model';
import { UpdateTransfer, RemoveTransfer } from '../actions/transfer.action';
import { TransferCheck } from '../models/trasfer-check';

@Component({
  selector: '[transfer-point]',
  templateUrl: './transfer-point.component.html',
  styleUrls: ['./transfer-point.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransferPointComponent implements OnInit {

  @Input()
  public transferCheck: TransferCheck;

  @Input()
  public transfer: TransferModel;

  public updateMark = false;

  constructor(private store: Store<CityModel>) {}

  ngOnInit() {}

  editTransfer() {
    this.updateMark = true;
  }

  updateTransfer(transfer: ITransferModel) {
    this.store.dispatch(new UpdateTransfer(transfer));
    this.updateMark = false;
  }

  cancelUpdateTransfer() {
    this.updateMark = false;
  }

  removeTransfer(transfer: TransferModel) {
    this.store.dispatch(new RemoveTransfer(transfer));
  }
}
