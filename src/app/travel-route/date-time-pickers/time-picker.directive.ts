import { Directive, OnInit, OnDestroy, ElementRef } from '@angular/core';

import * as Flatpickr from 'flatpickr';
import * as moment from 'moment';
import { TravelRoute } from '../common/constants';

@Directive({
  selector: '[time-picker]'
})
export class TimePickerDirective implements OnInit, OnDestroy {

  private datePicker: Flatpickr;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    Flatpickr.prototype.parseDate = (date: string) => {
      return new Date(+moment(date, TravelRoute.TIME_FORMAT));
    };
    this.datePicker = new Flatpickr(this.el.nativeElement, <any>{
      utc: true,
      noCalendar: true,
      enableTime: true,
      hourIncrement: 1,
      minuteIncrement: 1,
      dateFormat: TravelRoute.TIME_FORMAT,
      formatDate: (format: string, date: Date) => {
        return moment(date).format(format);
      }
    });
  }

  ngOnDestroy(): void {
    this.datePicker.destroy();
  }

}
