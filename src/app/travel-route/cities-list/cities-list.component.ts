import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CityModel } from '../models/city-model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CityState } from '../reducers/city.reducer';

@Component({
  selector: 'cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesListComponent implements OnInit {

  private cities$: Observable<CityModel[]>;
  private citiesLoading$: Observable<boolean>;

  constructor(private store: Store<CityModel>) { }

  ngOnInit() {
    this.cities$ = this.store.select('cities').map((state: CityState) => state.cities);
    this.citiesLoading$ = this.store.select('cities').map((state: CityState) => state.loading);
  }

}
