import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import { CityModel, ICityModel } from '../models/city.model';
import { removeCity, updateCity } from '../actions/city.actions';

@Component({
  selector: '[city-point]',
  templateUrl: 'city-point.component.html',
  styleUrls: ['city-point.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityPointComponent {

  @Input()
  public city: CityModel;

  private updateMark = false;

  constructor(private store: Store<CityModel>) { }

  editCity() {
    this.updateMark = true;
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
}
