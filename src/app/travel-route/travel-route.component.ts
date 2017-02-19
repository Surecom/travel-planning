import { Component, OnInit, ViewChild } from '@angular/core';
import { SliderComponent } from './slider/slider.component';
import { CityModel } from './models/city-model';
import { Store } from '@ngrx/store';
import { loadCities } from './travel-route.actions';
import { CityState } from './reducers/city.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: '[travel-route]',
  templateUrl: './travel-route.component.html',
  styleUrls: ['./travel-route.component.scss']
})
export class TravelRouteComponent implements OnInit {

  days: number = 0;
  cities$: Observable<CityModel[]>;

  @ViewChild(SliderComponent)
  private slider: SliderComponent;

  constructor(private store: Store<CityModel>) { }

  ngOnInit() {
    this.store.dispatch(loadCities());
    this.cities$ = this.store.select('cities').map((state: CityState) => state.cities);
  }

  dayChange(value: string) {
    this.days = parseInt(value);
  }
}
