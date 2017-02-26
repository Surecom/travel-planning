import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MdDialog } from '@angular/material/dialog/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

import { CityCrossingModalComponent } from '../city-crossing-modal/city-crossing-modal.component';
import { TravelRoute } from '../common/constants';
import { TransferState } from '../reducers/transfer.reducer';
import { CityModel } from '../models/city.model';
import { TransferModel, ITransferModel } from '../models/transfer.model';
import { AddTransfer, UpdateTransfer, RemoveTransfer } from '../actions/transfer.action';

@Component({
  selector: '[city-crossing]',
  templateUrl: './city-crossing.component.html',
  styleUrls: ['./city-crossing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityCrossingComponent implements OnInit {

  @Input()
  public city: CityModel;

  public updateMark: string;

  public transferUpdateForm: FormGroup;

  public formErrors = {
    way: '',
    from: '',
    to: ''
  };

  private validationMessages = {
    to: {
      required: 'Field is required'
    },
    from: {
      required: 'Field is required'
    },
    way: {
      required: 'Field is required',
      minlength: 'Minimum length is 3 symbols',
      maxlength: 'Maximum length is 100 symbols'
    }
  };

  public transfers$: Observable<TransferModel[]>;
  public transfersLoading$: Observable<boolean>;

  constructor(private dialog: MdDialog,
              private store: Store<TransferModel>,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.transfers$ = this.store
      .select('transfers')
      .map((state: TransferState) => state.transfers.filter(transfer => transfer.cityId === this.city.id));
    this.transfersLoading$ = this.store.select('transfers').map((state: TransferState) => state.loading);

    this.transferUpdateForm = this.formBuilder.group({
      id: [''],
      to: ['', Validators.required],
      from: ['', Validators.required],
      cityId: [''],
      way: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      info: ['']
    });
    this.transferUpdateForm.valueChanges.subscribe(this.validateForm.bind(this, this.transferUpdateForm));
  }

  getTotalTransferTime(transfer: TransferModel): string {
    const tmpTo = +moment(transfer.to, TravelRoute.TIME_FORMAT);
    const tmpFrom = +moment(transfer.from, TravelRoute.TIME_FORMAT);
    let totalTime: string;
    (<any>this).moment = moment;
    if (tmpFrom > tmpTo) {
      totalTime = moment(moment('24:00', TravelRoute.TIME_FORMAT).diff(moment(tmpFrom - tmpTo))).format(TravelRoute.TIME_FORMAT);
    } else {
      totalTime = moment(tmpTo - tmpFrom).utc().format(TravelRoute.TIME_FORMAT);
    }
    return `Total transfer time is ${totalTime}`;
  }

  removeTransfer(transfer: TransferModel) {
    this.store.dispatch(new RemoveTransfer(transfer));
  }

  editTransfer(transfer: TransferModel) {
    this.updateMark = transfer.id;
    this.transferUpdateForm.get('id').setValue(transfer.id);
    this.transferUpdateForm.get('cityId').setValue(transfer.cityId);
    this.transferUpdateForm.get('from').setValue(transfer.from);
    this.transferUpdateForm.get('to').setValue(transfer.to);
    this.transferUpdateForm.get('info').setValue(transfer.info);
    this.transferUpdateForm.get('way').setValue(transfer.way);
  }

  updateTransfer() {
    this.store.dispatch(new UpdateTransfer(this.transferUpdateForm.value));
    this.updateMark = '';
  }

  cancelEditTransfer() {
    this.updateMark = '';
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

  private validateForm(form: FormGroup) {
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const message = this.validationMessages[field];
          for (const error in control.errors) {
            if (control.errors.hasOwnProperty(error)) {
              this.formErrors[field] += `${message[error]} `;
            }
          }
        }
      }
    }
  }
}
