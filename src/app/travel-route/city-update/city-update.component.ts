import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CityModel, ICityModel } from '../models/city.model';
import { minValueValidator } from '../validators/min-value.validator';
import { numberValidator } from '../validators/number.validator';

@Component({
  selector: '[city-update]',
  templateUrl: './city-update.component.html',
  styleUrls: ['./city-update.component.scss']
})
export class CityUpdateComponent implements OnInit {

  @Input()
  public city: CityModel;

  @Output()
  public update: EventEmitter<ICityModel> = new EventEmitter();

  @Output()
  public cancel: EventEmitter<{}> = new EventEmitter();

  public cityUpdateForm: FormGroup;

  public formErrors = {
    title: '',
    description: '',
    cost: ''
  };

  private validationMessages = {
    title: {
      required: 'Field is required',
      minlength: 'Minimum length is 3 symbols',
      maxlength: 'Maximum length is 100 symbols'
    },
    cost: {
      required: 'Field is required',
      minValueValidator: 'Cost must be more than 0',
      numberValidator: 'Cost must be number'
    }
  };

  private text: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.cityUpdateForm = this.formBuilder.group({
      id: [this.city.id],
      to: [this.city.to],
      from: [this.city.from],
      cost: [this.city.cost, [Validators.required, minValueValidator(0), numberValidator]],
      title: [this.city.title, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      description: [this.city.description]
    });
    this.cityUpdateForm.valueChanges.subscribe(this.validateForm.bind(this, this.cityUpdateForm));
  }

  updateAction() {
    this.cityUpdateForm.get('description').setValue(this.text);
    this.update.emit(this.cityUpdateForm.value);
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
