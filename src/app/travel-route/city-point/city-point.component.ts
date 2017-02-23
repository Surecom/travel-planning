import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import { CityModel } from '../models/city.model';
import { removeCity } from '../actions/city.actions';

@Component({
  selector: '[city-point]',
  templateUrl: 'city-point.component.html',
  styleUrls: ['city-point.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityPointComponent implements OnInit {

  @Input()
  public city: CityModel;

  constructor(private store: Store<CityModel>) { }

  ngOnInit() {
  }

  removeCity() {
    this.store.dispatch(removeCity(this.city));
  }

}
