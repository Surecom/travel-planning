import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MdDialog } from '@angular/material/dialog/dialog';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as moment from 'moment';

import { TransferModel, ITransferModel } from '../models/transfer.model';
import { TransferState } from '../reducers/transfer.reducer';
import { CityModel } from '../models/city.model';
import { AddTransfer } from '../actions/transfer.action';
import { CityCrossingModalComponent } from '../city-crossing-modal/city-crossing-modal.component';
import { TravelRoute } from '../common/constants';
import { TransferCheck } from '../models/trasfer-check';

@Component({
  selector: '[transfer-list]',
  templateUrl: 'transfer-list.component.html',
  styleUrls: ['transfer-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransferListComponent implements OnInit {

  @Input()
  private city: CityModel;

  public previousTransfer: TransferModel;
  public totalHours: number;

  public transfers$: Observable<TransferModel[]>;
  public transfersLoading$: Observable<boolean>;

  constructor(private dialog: MdDialog,
              private store: Store<TransferModel>) { }

  ngOnInit() {
    this.transfers$ = this.store
      .select('transfers')
      .map((state: TransferState) => state.transfers.filter(transfer => transfer.cityId === this.city.id));
    this.transfersLoading$ = this.store.select('transfers').map((state: TransferState) => state.loading);
  }

  getTotalTransferTime(from: string, to: string): moment.Moment {
    const tmpTo = +moment(to, TravelRoute.TIME_FORMAT);
    const tmpFrom = +moment(from, TravelRoute.TIME_FORMAT);
    let totalTime: moment.Moment;
    if (tmpFrom > tmpTo) {
      totalTime = moment(moment('24:00', TravelRoute.TIME_FORMAT).diff(moment(tmpFrom - tmpTo)));
    } else {
      totalTime = moment(tmpTo - tmpFrom).utc();
    }
    return totalTime;
  }

  validateTransfers(transfer: TransferModel, last: boolean) {
    const result = new TransferCheck();
    if (this.previousTransfer && this.previousTransfer.cityId === transfer.cityId) {
      const timeBetweenTransfers = moment.duration(+this.getTotalTransferTime(this.previousTransfer.to, transfer.from)).asMinutes();
      const transferTime = moment.duration(+this.getTotalTransferTime(transfer.from, transfer.to)).asMinutes();
      this.totalHours += (timeBetweenTransfers + transferTime);
      this.previousTransfer = transfer;
      if (result.danger = (
            this.totalHours > TravelRoute.TRANSFERS.OVERLOAD_TIME ||
            timeBetweenTransfers > TravelRoute.TRANSFERS.MAX_TIME
          )
      ) {
        result.message = 'Time between transfers is more than 3 hours or total transfers time is more than 48 hours.';
      } else if (result.warning = timeBetweenTransfers < TravelRoute.TRANSFERS.MIN_TIME) {
        result.message = 'Time between transfers is less than 1 hour.';
      }
      result.success = !(result.danger || result.warning);
    } else {
      this.previousTransfer = transfer;
      result.success = true;
    }
    if (last) {
      this.previousTransfer = null;
    }
    return result;
  }

  showAddCityTransferModal() {
    const transferModal = this.dialog.open(CityCrossingModalComponent, {disableClose: true});
    transferModal.afterClosed().subscribe((newTransfer: ITransferModel) => {
      if (newTransfer) {
        newTransfer.cityId = this.city.id;
        this.store.dispatch(new AddTransfer(new TransferModel(newTransfer)));
      }
    });
  }
}
