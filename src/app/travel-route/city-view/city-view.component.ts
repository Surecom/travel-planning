import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CityModel } from '../models/city.model';

@Component({
  selector: '[city-view]',
  templateUrl: './city-view.component.html',
  styleUrls: ['./city-view.component.scss']
})
export class CityViewComponent implements OnInit {

  @Input()
  public city: CityModel;

  @Output()
  public edit: EventEmitter<CityModel> = new EventEmitter();

  @Output()
  public remove: EventEmitter<CityModel> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
