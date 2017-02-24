import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { CityModel } from '../models/city.model';
import { addCity } from '../actions/city.actions';

@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityAddComponent implements OnInit, AfterViewInit {

  public cityForm: FormGroup;
  public formErrors = {
    title: '',
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
    title: {
      required: 'Field is required',
      minlength: 'Minimum length is 3 chars',
      maxlength: 'Maximum length is 50 chars'
    }
  };

  constructor(private formBuilder: FormBuilder, private store: Store<CityModel>) { }

  ngOnInit() {
    this.cityForm = this.formBuilder.group({
      to: ['', Validators.required],
      from: ['', Validators.required],
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      description: ['']
    });
    this.cityForm.valueChanges.subscribe(this.validateForm.bind(this));
  }

  ngAfterViewInit() {
  }

  onAdd(cityForm: FormGroup) {
    this.store.dispatch(addCity(new CityModel(cityForm.value)));
  }

  private validateForm() {
    const form = this.cityForm;
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
