import { Directive, OnInit, OnDestroy, ElementRef } from '@angular/core';

import * as Flatpickr from 'flatpickr';
import * as moment from 'moment';
import { TravelRouteConstants } from '../common/constants';

@Directive({
  selector: '[time-picker]'
})
export class TimePickerDirective implements OnInit, OnDestroy {

  private datePicker: Flatpickr;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    Flatpickr.prototype.parseDate = (date: string) => new Date(+moment(date, TravelRouteConstants.TIME_FORMAT));
    this.datePicker = new Flatpickr(this.el.nativeElement, <any>{
      utc: true,
      noCalendar: true,
      enableTime: true,
      hourIncrement: 1,
      minuteIncrement: 1,
      dateFormat: TravelRouteConstants.TIME_FORMAT,
      formatDate: (format: string, date: Date) => moment(date).format(format)
    });
  }

  ngOnDestroy(): void {
    this.datePicker.destroy();
  }

}
