import { Component, OnInit } from '@angular/core';
import { CityModel } from './models/city-model';
import { Store } from '@ngrx/store';
import { loadCities, updateCitiesDate } from './travel-route.actions';
import { CityState } from './reducers/city.reducer';
import { Observable } from 'rxjs/Observable';
import { UpdateModel } from './models/update-model';

@Component({
  selector: '[travel-route]',
  templateUrl: './travel-route.component.html',
  styleUrls: ['./travel-route.component.scss']
})
export class TravelRouteComponent implements OnInit {

  public cities$: Observable<CityModel[]>;

  constructor(private store: Store<CityModel>) { }

  ngOnInit() {
    this.store.dispatch(loadCities());
    this.cities$ = this.store.select('cities').map((state: CityState) => state.cities);
  }

  updateCities(dates: UpdateModel[]) {
    this.store.dispatch(updateCitiesDate(dates.map((date: UpdateModel) => date.toModel())));
  }
}
