import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy, Input, QueryList, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { CityModel } from '../models/city.model';
import { addCity } from '../actions/city.actions';
import { minValueValidator } from '../validators/min-value.validator';
import { numberValidator } from '../validators/number.validator';

@Component({
  selector: '[city-add]',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityAddComponent implements OnInit, AfterViewInit, OnChanges {

  @Input()
  private cities: QueryList<CityModel[]>;

  public fromLimit: string;
  public cityForm: FormGroup;
  public formErrors = {
    title: '',
    from: '',
    to: '',
    cost: ''
  };
  private text: string;

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
      cost: ['', [Validators.required, minValueValidator(0), numberValidator]],
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      description: ['']
    });
    this.cityForm.valueChanges.subscribe(this.validateForm.bind(this));
  }

  ngOnChanges(): void {
    if (this.cityForm) {
      if (this.cities.length > 0) {
        this.cityForm.get('to').setValue(this.cities[this.cities.length - 1].to);
        this.cityForm.get('from').setValue(this.fromLimit = this.cities[this.cities.length - 1].to);
        this.cityForm.get('from').disable();
      } else if (this.cities.length === 0) {
        this.cityForm.get('from').enable();
        this.cityForm.reset();
        this.fromLimit = null;
      }
    }
  }

  ngAfterViewInit() {
  }

  onAdd(cityForm: FormGroup) {
    this.cityForm.get('from').enable();
    this.cityForm.get('description').setValue(this.text);
    this.store.dispatch(addCity(new CityModel(cityForm.value)));
    this.cityForm.reset();
  }

  onChangeHandler(text: string) {
    this.text = text;
  }

  private validateForm() {
    const form = this.cityForm;
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
