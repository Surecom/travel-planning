import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CityModel } from '../models/city-model';
import { Store } from '@ngrx/store';
import { addCity } from '../travel-route.actions';

@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityAddComponent implements OnInit, AfterViewInit {

  public cityForm: FormGroup;
  private formErrors = {
    title: ''
  };
  private validationMessages = {
    title: {
      required: 'Field is required',
      minlength: 'Minimum length is 5 chars',
      maxlength: 'Maximum length is 50 chars'
    }
  };

  constructor(private formBuilder: FormBuilder, private store: Store<CityModel>) { }

  ngOnInit() {
    this.cityForm = this.formBuilder.group({
      to: ['', Validators.required],
      from: ['', Validators.required],
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      description: ['']
    });
  }

  ngAfterViewInit() {
  }

  onAdd(cityForm: FormGroup) {
    this.store.dispatch(addCity(new CityModel(cityForm.value)));
  }

}
