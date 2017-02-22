import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {CityTransferModel} from '../models/city-transfer-model';

@Component({
  selector: '[city-crossing]',
  templateUrl: './city-crossing.component.html',
  styleUrls: ['./city-crossing.component.scss']
})
export class CityCrossingComponent implements OnInit {

  @Output()
  public removeTransfer: EventEmitter<CityTransferModel> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}
