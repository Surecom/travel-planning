import { Component, OnInit, ChangeDetectionStrategy, Input, QueryList } from '@angular/core';

import { CityModel } from '../models/city.model';

@Component({
  selector: '[cities-list]',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesListComponent implements OnInit {

  @Input()
  public cities: QueryList<CityModel[]>;

  @Input()
  public citiesLoading: boolean;

  constructor() { }

  ngOnInit() {
  }
}
