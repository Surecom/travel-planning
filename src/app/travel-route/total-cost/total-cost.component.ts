import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { TransferModel } from '../models/transfer.model';
import { CityModel } from '../models/city.model';
import { TravelState } from '../reducers/reducer';

@Component({
  selector: '[total-cost]',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.scss']
})
export class TotalCostComponent implements OnInit {

  private transfers: TransferModel[];
  private cities: CityModel[];
  public cities$: Observable<CityModel[]>;
  public transfers$: Observable<TransferModel[]>;

  public citiesCost = 0;
  public transfersCost = 0;

  constructor(private store: Store<TravelState>) { }

  ngOnInit(): void {
    this.cities$ = this.store.select('travel').map((state: TravelState) => state.cities);
    this.cities$.subscribe(res => {
      this.cities = res;
      if (this.cities.length > 0) {
        this.citiesCost = this.cities
          .map(city => +city.cost)
          .reduce((s, o) => s + o);
      } else {
        this.citiesCost = 0;
      }
    });
    this.transfers$ = this.store.select('travel').map((state: TravelState) => {
      const tmp: TransferModel[] = [];
      for (let j = 0; j < state.transfers.length; j++) {
        tmp.push(state.transfers[j]);
      }
      return tmp;
    });
    this.transfers$.subscribe(res => {
      this.transfers = res;
      if (this.transfers.length > 0) {
        this.transfersCost = this.transfers
          .map(transfer => +transfer.cost)
          .reduce((s, o) => s + o);
      } else {
        this.transfersCost = 0;
      }
    });
  }

}
