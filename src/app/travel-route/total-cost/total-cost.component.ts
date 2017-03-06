import { Component, OnChanges, Input, QueryList } from '@angular/core';
import { TransferModel } from '../models/transfer.model';
import { CityModel } from '../models/city.model';

@Component({
  selector: '[total-cost]',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.scss']
})
export class TotalCostComponent implements OnChanges {

  @Input()
  private transfers: QueryList<TransferModel>;
  @Input()
  private cities: QueryList<CityModel>;

  public citiesCost = 0;
  public transfersCost = 0;

  constructor() { }

  ngOnChanges(): void {
    if (this.cities.length > 0) {
      this.citiesCost = this.cities
        .map(city => +city.cost)
        .reduce((s, o) => s + o);
    }
    if (this.transfers.length > 0) {
      this.transfersCost = this.transfers
        .map(transfer => +transfer.cost)
        .reduce((s, o) => s + o);
    }
  }

}
