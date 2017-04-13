import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { CityModel } from '../models/city.model';
import { TravelState } from '../reducers/reducer';

@Component({
  selector: '[cities-list]',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesListComponent implements OnInit {

  public cities$: Observable<CityModel[]>;
  public loading$: Observable<boolean>;

  constructor(private store: Store<TravelState>) { }

  ngOnInit() {
    this.cities$ = this.store.select('travel').map((state: TravelState) => state.cities);
    this.loading$ = this.store.select('travel').map((state: TravelState) => state.loading);
  }
}
