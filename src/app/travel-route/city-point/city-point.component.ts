import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { CityModel } from '../models/city-model';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { removeCity } from '../travel-route.actions';

@Component({
  selector: '[city-point]',
  templateUrl: 'city-point.component.html',
  styleUrls: ['city-point.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityPointComponent implements OnInit {

  @Input()
  private city: CityModel;

  constructor(private store: Store<CityModel>) { }

  ngOnInit() {
  }

  removeCity() {
    this.store.dispatch(removeCity(this.city));
  }

}
