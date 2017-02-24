import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CityModel, ICityModel } from '../models/city.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: '[city-update]',
  templateUrl: './city-update.component.html',
  styleUrls: ['./city-update.component.scss']
})
export class CityUpdateComponent implements OnInit {

  @Input()
  public city: CityModel;

  @Input()
  public form: FormGroup;

  @Input()
  public formErrors: {};

  @Output()
  public update: EventEmitter<ICityModel> = new EventEmitter();

  @Output()
  public cancel: EventEmitter<{}> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
