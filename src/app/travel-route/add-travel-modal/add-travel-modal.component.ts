import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MdDialogRef } from '@angular/material';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TravelModel } from '../models/travel.model';
import { addTravel } from '../actions/travel.actions';

@Component({
  selector: '[add-travel-modal]',
  templateUrl: './add-travel-modal.component.html',
  styleUrls: ['./add-travel-modal.component.scss']
})
export class AddTravelModalComponent implements OnInit {

  public travelForm: FormGroup;
  public formErrors = {
    name: ''
  };

  private validationMessages = {
    name: {
      required: 'Field is required',
      minlength: 'Minimum length is 3 chars',
      maxlength: 'Maximum length is 50 chars'
    }
  };

  constructor(private dialogRef: MdDialogRef<AddTravelModalComponent>,
              private store: Store<TravelModel>,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.travelForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
    });
    this.travelForm.valueChanges.subscribe(this.validateForm.bind(this));
  }

  cancel() {
    this.dialogRef.close();
  }

  onAdd(travelForm: FormGroup) {
    this.store.dispatch(addTravel(new TravelModel(travelForm.value)));
    this.travelForm.reset();
    this.dialogRef.close();
  }

  private validateForm() {
    const form = this.travelForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.pristine && !control.valid) {
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
