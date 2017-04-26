import {
  Component, ViewChild, ElementRef, AfterViewInit, Input,
  OnDestroy, ChangeDetectionStrategy, Output, EventEmitter, OnInit
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { assign, difference, isEqual } from 'lodash';
import * as noUiSlider from 'nouislider';
import * as moment from 'moment';
import { List } from 'immutable';

import { CityModel } from '../models/city.model';
import { TravelRouteConstants } from '../common/constants';
import { SliderService } from '../services/slider.service';
import { CityDateUpdate } from '../models/city-date-update';

@Component({
  selector: '[slider]',
  templateUrl: 'slider.component.html',
  styleUrls: ['slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent implements AfterViewInit, OnDestroy, OnInit {

  @Input()
  private softLimitDays = 4;

  public cities$: Observable<List<CityModel>>;
  private cities: CityModel[];

  @ViewChild('slider')
  private slider: ElementRef;

  @Output()
  private updateCities: EventEmitter<CityDateUpdate[]> = new EventEmitter();

  private days = 0;
  private oldValueDates: string[];

  constructor(private sliderService: SliderService, private store: Store<{}>) {
  }

  ngOnInit(): void {
    this.cities$ = this.store.select('travel').map((state: Map<string, List<CityModel>>) => state.get('cities'));
    this.cities$.subscribe((res: List<CityModel>) => {
      const cities = res.toJS();
      if (!isEqual(this.cities, cities)) {
        this.cities = cities;
        this.update();
      }
    });
  }

  ngOnDestroy(): void {
    this.slider.nativeElement.noUiSlider.off('change');
    this.slider.nativeElement.noUiSlider.destroy();
  }

  ngAfterViewInit() {
    if (this.days <= 1) {
      return;
    }
    this.update();
  }

  private update() {
    let ranges: number[] = [];
    if (this.cities.length > 0) {
      ranges = this.cities
        .map((city: CityModel) =>
          Math.abs(moment(city.to, TravelRouteConstants.DATE_FORMAT).diff(moment(city.from, TravelRouteConstants.DATE_FORMAT), 'days')));
      this.days = ranges.reduce((s: number, o: number) => s + o);
    }
    const start: number[] = [0, ...ranges];

    for (let i = 0; i < this.cities.length; i++) {
      if (i === 0) {
        start[i] = +moment(this.cities[i].from, TravelRouteConstants.DATE_FORMAT).add(start[i], 'days');
      }
      start[i + 1] = +moment(this.cities[i].from, TravelRouteConstants.DATE_FORMAT).add(start[i + 1], 'days');
    }

    if (this.slider.nativeElement.noUiSlider) {
      this.slider.nativeElement.noUiSlider.destroy();
    }
    if (this.cities.length > 0) {
      this.createSlider(this.slider.nativeElement, start, this.days, this.softLimitDays);
    }
  }

  private createSlider(root: any, range: number[], totalDays: number, softLimit: number): void {
    noUiSlider.create(root,
      this.sliderService.currentOptions = assign(this.sliderService.defaultOptions, {
        start: [
          ...range
        ],
        range: {
          min: +moment(range[0]).add(-softLimit, 'days'),
          max: +moment(range[range.length - 1]).add(softLimit, 'days')
        },
        pips: {
          mode: 'count',
          values: 1,
          density: 100 / (totalDays + softLimit * 2)
        }
      })
    );

    root.noUiSlider.on('end', values => {
      if (difference(this.oldValueDates, values).length !== 0) {
        const updateModels: CityDateUpdate[] = [];
        for (let i = 0; i < values.length; i++) {
          if (values[i] !== this.oldValueDates[i]) {
            updateModels.push(new CityDateUpdate({
              newDate: values[i],
              oldDate: this.oldValueDates[i]
            }));
          }
        }
        this.oldValueDates = values;
        this.updateCities.emit(updateModels);
      }
    });

    root.noUiSlider.on('start', values => {
      this.oldValueDates = values;
    });

    const connect: Array<Element> = root.querySelectorAll('.noUi-connect');

    for (let i = 0; i < connect.length; i++) {
      connect[i].classList.add(`c-${i + 1}-color`);
    }
  }
}
