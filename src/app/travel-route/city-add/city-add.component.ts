import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { List } from 'immutable';

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
export class CityAddComponent implements OnInit, AfterViewInit {

  public cities$: Observable<List<CityModel>>;
  public currentTravelId$: Observable<string>;
  public cities: CityModel[];

  private currentTravelId: string;

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

  constructor(private formBuilder: FormBuilder, private store: Store<{}>) { }

  ngOnInit() {
    this.cities$ = this.store.select('travel').map((state: Map<string, List<CityModel>>) => state.get('cities'));
    this.cities$.subscribe((res: List<CityModel>) => {
      this.cities = res.toJS();
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
    });
    this.currentTravelId$ = this.store.select('travel').map((state: Map<string, string>) => state.get('currentTravelId'));
    this.currentTravelId$.subscribe(res => this.currentTravelId = res);
    this.cityForm = this.formBuilder.group({
      to: ['', Validators.required],
      from: ['', Validators.required],
      cost: ['', [Validators.required, minValueValidator(0), numberValidator]],
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      description: [''],
      travelId: ['']
    });
    this.cityForm.valueChanges.subscribe(this.validateForm.bind(this));
  }

  ngAfterViewInit() {
  }

  onAdd(cityForm: FormGroup) {
    cityForm.get('from').enable();
    cityForm.get('description').setValue(this.text);
    cityForm.get('travelId').setValue(this.currentTravelId);
    this.store.dispatch(addCity(new CityModel(cityForm.value)));
    cityForm.reset();
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
