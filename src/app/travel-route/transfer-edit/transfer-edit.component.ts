import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TransferModel, ITransferModel } from '../models/transfer.model';
import { minValueValidator } from '../validators/min-value.validator';
import { numberValidator } from '../validators/number.validator';

@Component({
  selector: '[transfer-edit]',
  templateUrl: './transfer-edit.component.html',
  styleUrls: ['./transfer-edit.component.scss']
})
export class TransferEditComponent implements OnInit {

  @Input()
  public transfer: TransferModel;

  public transferUpdateForm: FormGroup;

  public formErrors = {
    way: '',
    from: '',
    to: '',
    cost: ''
  };

  private validationMessages = {
    to: {
      required: 'Field is required'
    },
    from: {
      required: 'Field is required'
    },
    cost: {
      required: 'Field is required',
      minValueValidator: 'Cost must be more than 0',
      numberValidator: 'Cost must be number'
    },
    way: {
      required: 'Field is required',
      minlength: 'Minimum length is 3 symbols',
      maxlength: 'Maximum length is 100 symbols'
    }
  };

  @Output()
  public update: EventEmitter<ITransferModel> = new EventEmitter();

  @Output()
  public cancel: EventEmitter<{}> = new EventEmitter();

  private text: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.transferUpdateForm = this.formBuilder.group({
      id: [this.transfer.id],
      to: [this.transfer.to, Validators.required],
      from: [this.transfer.from, Validators.required],
      cityId: [this.transfer.cityId],
      cost: [this.transfer.cost, [Validators.required, minValueValidator(0), numberValidator]],
      way: [this.transfer.way, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      info: [this.transfer.info],
      order: [this.transfer.order]
    });
    this.transferUpdateForm.valueChanges.subscribe(this.validateForm.bind(this, this.transferUpdateForm));
  }

  updateAction() {
    this.transferUpdateForm.get('info').setValue(this.text);
    this.update.emit(this.transferUpdateForm.value);
  }

  onChangeHandler(text: string) {
    this.text = text;
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
