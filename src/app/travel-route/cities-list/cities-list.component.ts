import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CityModel } from '../models/city-model';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { CityState } from '../reducers/city.reducer';
import { MdDialog } from '@angular/material';
import { CityCrossingModalComponent } from '../city-crossing-modal/city-crossing-modal.component';

@Component({
  selector: '[cities-list]',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesListComponent implements OnInit {

  public cities$: Observable<CityModel[]>;
  public citiesLoading$: Observable<boolean>;

  constructor(private store: Store<CityModel>,
              private dialog: MdDialog) { }

  ngOnInit() {
    this.cities$ = this.store.select('cities').map((state: CityState) => state.cities);
    this.citiesLoading$ = this.store.select('cities').map((state: CityState) => state.loading);
  }

  showAddCityTransferModal() {
    const transferModal = this.dialog.open(CityCrossingModalComponent);
    transferModal.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
