import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MdDialog } from '@angular/material/dialog/dialog';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { TransferModel, ITransferModel } from '../models/transfer.model';
import { TransferState } from '../reducers/transfer.reducer';
import { CityModel } from '../models/city.model';
import { AddTransfer } from '../actions/transfer.action';
import { CityCrossingModalComponent } from '../city-crossing-modal/city-crossing-modal.component';

@Component({
  selector: '[transfer-list]',
  templateUrl: 'transfer-list.component.html',
  styleUrls: ['transfer-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransferListComponent implements OnInit {

  @Input()
  private city: CityModel;

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
