import { Component, ViewChild, ElementRef, AfterViewInit, Input,
  OnDestroy, ChangeDetectionStrategy, OnChanges, QueryList } from '@angular/core';

import { SliderService } from '../services/slider.service';

import * as noUiSlider from 'nouislider';
import * as _ from 'lodash';
import * as moment from 'moment';
import { CityModel } from '../models/city-model';
import { TravelRoute } from '../common/constants';

@Component({
  selector: '[slider]',
  templateUrl: 'slider.component.html',
  styleUrls: ['slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent implements AfterViewInit, OnDestroy, OnChanges {

  @Input()
  private softLimitDays = 4;

  @Input()
  private cities: QueryList<CityModel>;

  @ViewChild('slider')
  private slider: ElementRef;

  private days = 0;
  private leftLimit = 0;
  private rightLimit = 0;

  constructor(private sliderService: SliderService) {
  }

  ngOnDestroy(): void {
    this.slider.nativeElement.noUiSlider.off('change');
    this.slider.nativeElement.noUiSlider.destroy();
  }

  ngOnChanges(): void {
    this.update();
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
        .map((city: CityModel) => moment(city.to, TravelRoute.DATE_FORMAT).diff(moment(city.from, TravelRoute.DATE_FORMAT), 'days'));
      this.days = ranges.reduce((s: number, o: number) => s + o);
    }
    const start: number[] = [0, ...ranges];

    for (let i = 0; i < this.cities.length; i++) {
      if (i === 0) {
        start[i] = moment(this.cities[i].from, TravelRoute.DATE_FORMAT).add(start[i], 'days').valueOf();
      }
      start[i + 1] = moment(this.cities[i].from, TravelRoute.DATE_FORMAT).add(start[i + 1], 'days').valueOf();
    }

    if (this.slider.nativeElement.noUiSlider) {
      this.slider.nativeElement.noUiSlider.off('change');
      this.slider.nativeElement.noUiSlider.destroy();
    }
    if (this.cities.length > 0) {
      this.createSlider(this.slider.nativeElement, start, this.days, this.softLimitDays);
    }
  }

  private createSlider(root: any, range: number[], totalDays: number, softLimit: number): void {
    noUiSlider.create(root,
      this.sliderService.currentOptions = _.assign(this.sliderService.defaultOptions, {
        start: [
          ...range
        ],
        range: {
          min: moment(range[0]).add(-softLimit, 'days').valueOf(),
          max: moment(range[range.length - 1]).add(softLimit, 'days').valueOf()
        },
        pips: {
          mode: 'count',
          values: 1,
          density: 100 / (totalDays + softLimit * 2)
        }
      })
    );

    root.noUiSlider.on('change', (values, handle) => {
      const tmp = values;
      if (moment(values[handle], TravelRoute.DATE_FORMAT).valueOf() < range[0]) {
        tmp[handle] = range[0];
      } else if (moment(values[handle], TravelRoute.DATE_FORMAT).valueOf() > range[range.length - 1]) {
        values[handle] = range[range.length - 1];
      }
      root.noUiSlider.set(tmp);
    });

    const connect: Array<Element> = root.querySelectorAll('.noUi-connect');

    for (let i = 0; i < connect.length; i++) {
      connect[i].classList.add(`c-${i + 1}-color`);
    }
  }
}
