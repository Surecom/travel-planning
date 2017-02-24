import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MdDialogRef } from '@angular/material/dialog/dialog-ref';

@Component({
  selector: 'city-crossing-modal',
  templateUrl: './city-crossing-modal.component.html',
  styleUrls: ['./city-crossing-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityCrossingModalComponent implements OnInit {

  public transferForm: FormGroup;

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

  constructor(private dialogRef: MdDialogRef<CityCrossingModalComponent>, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.transferForm = this.formBuilder.group({
      to: ['', Validators.required],
      from: ['', Validators.required],
      cityId: [''],
      way: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      info: ['']
    });
    this.transferForm.valueChanges.subscribe(this.validateForm.bind(this, this.transferForm));
  }

  addTransfer() {
    this.dialogRef.close(this.transferForm.value);
  }

  cancel() {
    this.dialogRef.close();
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
