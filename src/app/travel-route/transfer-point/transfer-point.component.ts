import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { TransferModel, ITransferModel } from '../models/transfer.model';
import { CityModel } from '../models/city.model';
import { UpdateTransfer, RemoveTransfer } from '../actions/transfer.action';

@Component({
  selector: '[transfer-point]',
  templateUrl: './transfer-point.component.html',
  styleUrls: ['./transfer-point.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransferPointComponent implements OnInit {

  @Input()
  public transfer: TransferModel;

  private updateMark = false;

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

  constructor(private store: Store<CityModel>, private formBuilder: FormBuilder) { }

  ngOnInit() {
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

  editTransfer(transfer: TransferModel) {
    this.updateMark = true;
    this.transferUpdateForm.get('id').setValue(transfer.id);
    this.transferUpdateForm.get('cityId').setValue(transfer.cityId);
    this.transferUpdateForm.get('from').setValue(transfer.from);
    this.transferUpdateForm.get('to').setValue(transfer.to);
    this.transferUpdateForm.get('info').setValue(transfer.info);
    this.transferUpdateForm.get('way').setValue(transfer.way);
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
