import {
  Component, ViewChild, ElementRef, AfterViewInit, Input, OnDestroy, ChangeDetectionStrategy, OnChanges, QueryList
} from '@angular/core';

import {SliderService} from '../services/slider.service';

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
  private days: number = 0;

  @Input()
  private softLimitDays: number = 4;

  @Input()
  private cities: QueryList<CityModel>;

  @ViewChild('slider')
  private slider: ElementRef;

  private leftLimit: number = 0;
  private rightLimit: number = 0;

  constructor(private sliderService: SliderService) { }

  ngOnDestroy(): void {
    this.slider.nativeElement.noUiSlider.off('change');
    this.slider.nativeElement.noUiSlider.destroy();
  }

  ngOnChanges(): void {
    this.update();
  }

  ngAfterViewInit() {
    if (this.days <= 1) { return; }
    this.update();
  }

  private update() {
    let ranges: number[] = [];
    if(this.cities.length > 0) {
      ranges = this.cities
        .map((city: CityModel) => moment(city.to).diff(moment(city.from), 'days'));
      this.days = ranges.reduce((s: number, o: number) => s + o);
    }
    let start: number[] = [0, ...ranges];

    for(let i: number = 0; i < this.cities.length; i++) {
      if (i === 0) {
        start[i] = moment(this.cities[i].from).add(start[i], 'days').valueOf();
      }
      start[i + 1] = moment(this.cities[i].from).add(start[i + 1], 'days').valueOf();
    }

    if(this.cities.length > 0 && !this.slider.nativeElement.noUiSlider) {
      noUiSlider.create(this.slider.nativeElement,
        this.sliderService.currentOptions = _.assign(this.sliderService.defaultOptions, {
          start: [
            ...start
          ],
          range: {
            min: moment(start[0]).add(-this.softLimitDays, 'days').valueOf(),
            max: moment(start[start.length - 1]).add(this.softLimitDays, 'days').valueOf()
          },
          pips: {
            mode: 'count',
            values: 1,
            density: 100 / (this.days + this.softLimitDays * 2)
          }
        })
      );

      this.leftLimit = start[0];
      this.rightLimit = start[start.length - 1];

      this.slider.nativeElement.noUiSlider.on('change', this.softLimit);

      let connect: Array<Element> = this.slider.nativeElement.querySelectorAll('.noUi-connect');

      for(let i = 0; i < connect.length; i++ ) {
        connect[i].classList.add(`c-${i+1}-color`);
      }
    }
    if(this.slider.nativeElement.noUiSlider && this.cities.length > 0) {
      this.slider.nativeElement.noUiSlider.updateOptions(
        this.sliderService.currentOptions = _.assign(this.sliderService.currentOptions, {
          start: [
            ...start
          ],
          range: {
            min: moment(start[0]).add(-this.softLimitDays, 'days').valueOf(),
            max: moment(start[start.length - 1]).add(this.softLimitDays, 'days').valueOf()
          },
          pips: {
            mode: 'count',
            values: 1,
            density: 100 / (this.days + this.softLimitDays * 2)
          }
        })
      );
      this.slider.nativeElement.removeChild(this.slider.nativeElement.querySelector('.noUi-pips'));
      this.slider.nativeElement.noUiSlider.pips(this.sliderService.currentOptions.pips);
    }
  }

  private softLimit: Function = (values, handle) => {
    let tmp = values;
    if (moment(values[handle], TravelRoute.DATE_FORMAT).valueOf() < this.leftLimit) {
      tmp[handle] = this.leftLimit;
    } else if (moment(values[handle], TravelRoute.DATE_FORMAT).valueOf() > this.rightLimit) {
      values[handle] = this.rightLimit;
    }
    this.slider.nativeElement.noUiSlider.set(tmp);
  }
}
