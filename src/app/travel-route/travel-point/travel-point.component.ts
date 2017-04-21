import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { removeTravel, setCurrentTravel, updateTravel } from '../actions/travel.actions';
import { TravelModel } from '../models/travel.model';

@Component({
  selector: '[travel-point]',
  templateUrl: './travel-point.component.html',
  styleUrls: ['./travel-point.component.scss']
})
export class TravelPointComponent implements OnInit {

  @Input()
  public travel: TravelModel;

  public updateMark = false;

  public currentTravelId$: Observable<string>;
  private currentTravelId: string;

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

  constructor(private store: Store<{}>, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.currentTravelId$ = this.store.select('travel').map((state: Map<string, string>) => state.get('currentTravelId'));
    this.currentTravelId$.subscribe(res => this.currentTravelId = res);
    this.travelForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
    });
    this.travelForm.valueChanges.subscribe(this.validateForm.bind(this));
  }

  public removeTravel(travel: TravelModel) {
    this.store.dispatch(removeTravel(travel));
  }

  public setCurrent() {
    this.store.dispatch(setCurrentTravel(this.travel.id));
  }

  public updateTravel() {
    this.updateMark = true;
  }

  public cancel() {
    this.updateMark = false;
  }

  public saveTravel(travel: TravelModel) {
    travel.name = this.travelForm.value['name'];
    this.store.dispatch(updateTravel(travel));
    this.updateMark = false;
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
