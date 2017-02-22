import { Component, OnInit, Output, EventEmitter, Input, QueryList } from '@angular/core';
import { CityTransferModel, ICityTransferModel } from '../models/city-transfer-model';
import { CityModel } from '../models/city-model';
import { CityCrossingModalComponent } from '../city-crossing-modal/city-crossing-modal.component';
import { MdDialog } from '@angular/material';

@Component({
  selector: '[city-crossing]',
  templateUrl: './city-crossing.component.html',
  styleUrls: ['./city-crossing.component.scss']
})
export class CityCrossingComponent implements OnInit {

  @Input()
  public city: CityModel;

  @Input()
  private cities: QueryList<CityModel[]>;

  public transfer: CityTransferModel;

  @Output()
  public removeTransfer: EventEmitter<CityTransferModel> = new EventEmitter();

  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }

  showAddCityTransferModal() {
    const transferModal = this.dialog.open(CityCrossingModalComponent, {disableClose: true});
    transferModal.afterClosed().subscribe((newTransfer: ICityTransferModel) => {
      if (newTransfer) {
        newTransfer.cityId = this.city.id;
        console.log(newTransfer);
      }
    });
  }
}
