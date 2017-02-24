import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import { CityModel, ICityModel } from '../models/city.model';
import { removeCity, updateCity } from '../actions/city.actions';

@Component({
  selector: '[city-point]',
  templateUrl: 'city-point.component.html',
  styleUrls: ['city-point.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityPointComponent implements OnInit {

  @Input()
  public city: CityModel;

  private updateMark = false;

  public cityUpdateForm: FormGroup;

  public formErrors = {
    title: '',
    description: ''
  };

  private validationMessages = {
    title: {
      required: 'Field is required',
      minlength: 'Minimum length is 3 symbols',
      maxlength: 'Maximum length is 100 symbols'
    }
  };

  constructor(private store: Store<CityModel>, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.cityUpdateForm = this.formBuilder.group({
      id: [''],
      to: [''],
      from: [''],
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      description: ['']
    });
    this.cityUpdateForm.valueChanges.subscribe(this.validateForm.bind(this, this.cityUpdateForm));
  }

  editCity(city: CityModel) {
    this.updateMark = true;
    this.cityUpdateForm.get('id').setValue(city.id);
    this.cityUpdateForm.get('to').setValue(city.to);
    this.cityUpdateForm.get('from').setValue(city.from);
    this.cityUpdateForm.get('title').setValue(city.title);
    this.cityUpdateForm.get('description').setValue(city.description);
  }

  updateCity(city: ICityModel) {
    this.store.dispatch(updateCity(city));
    this.updateMark = false;
  }

  cancelUpdateCity() {
    this.updateMark = false;
  }

  removeCity(city: CityModel) {
    this.store.dispatch(removeCity(city));
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
