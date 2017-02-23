import { Component, OnInit, Output, EventEmitter, Input, QueryList } from '@angular/core';
import { TransferModel, ITransferModel } from '../models/transfer.model';
import { CityModel } from '../models/city.model';
import { CityCrossingModalComponent } from '../city-crossing-modal/city-crossing-modal.component';
import { MdDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { TransferState } from '../reducers/transfer.reducer';
import { addTransfer } from '../actions/transfer.action';

import * as moment from 'moment';
import { TravelRoute } from '../common/constants';

@Component({
  selector: '[city-crossing]',
  templateUrl: './city-crossing.component.html',
  styleUrls: ['./city-crossing.component.scss']
})
export class CityCrossingComponent implements OnInit {

  @Input()
  public city: CityModel;

  public transfers$: Observable<TransferModel[]>;
  public transfersLoading$: Observable<boolean>;

  @Output()
  public removeTransfer: EventEmitter<TransferModel> = new EventEmitter();

  constructor(private dialog: MdDialog, private store: Store<TransferModel>) { }

  ngOnInit() {
    this.transfers$ = this.store
      .select('transfers')
      .map((state: TransferState) => state.transfers.filter(transfer => transfer.cityId === this.city.id));
    this.transfersLoading$ = this.store.select('transfers').map((state: TransferState) => state.loading);
  }

  getTotalTimeWithEstimated(transfer: TransferModel): string {
    const isNextDay = moment(transfer.from, TravelRoute.TIME_FORMAT)
      .diff(moment(transfer.to, TravelRoute.TIME_FORMAT));
    const totalTime = moment(Math.abs(isNextDay)).utc().format(TravelRoute.TIME_FORMAT);
    return `Total transfer time is ${totalTime} ${isNextDay > 0 ? '(+1 day)' : ''}`;
  }

  showAddCityTransferModal() {
    const transferModal = this.dialog.open(CityCrossingModalComponent, {disableClose: true});
    transferModal.afterClosed().subscribe((newTransfer: ITransferModel) => {
      if (newTransfer) {
        newTransfer.cityId = this.city.id;
        this.store.dispatch(addTransfer(new TransferModel(newTransfer)));
      }
    });
  }
}
