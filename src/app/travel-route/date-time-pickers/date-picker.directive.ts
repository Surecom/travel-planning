import { Directive, OnInit, ElementRef, OnDestroy, Input, OnChanges } from '@angular/core';

import * as Flatpickr from 'flatpickr';
import * as moment from 'moment';
import { TravelRouteConstants } from '../common/constants';

@Directive({
  selector: '[date-picker]'
})
export class DatePickerDirective implements OnInit, OnDestroy, OnChanges {

  @Input()
  private minDate: string;

  @Input()
  private maxDate: string;

  @Input()
  private currentValue: string;

  private datePicker: Flatpickr;

  constructor(private el: ElementRef) { }

  ngOnChanges(): void {
    if (this.datePicker) {
      if (this.maxDate) {
        this.datePicker.set('maxDate',
          moment(this.maxDate, TravelRouteConstants.DATE_FORMAT)
            .add(this.currentValue ? 1 : -1, 'day')
            .format(TravelRouteConstants.DATE_FORMAT));
      }
      if (this.minDate) {
        const tmp = moment(this.minDate, TravelRouteConstants.DATE_FORMAT)
          .add(1, 'day')
          .format(TravelRouteConstants.DATE_FORMAT);
        if (this.minDate === this.el.nativeElement.value) {
          this.datePicker.setDate(tmp);
        }
        this.datePicker.set('minDate', tmp);
      }
      if (this.currentValue) {
        this.datePicker.setDate(this.currentValue);
      }
    }
  }

  ngOnInit(): void {
    Flatpickr.prototype.parseDate = (date: string) => {
      return new Date(+moment(date, TravelRouteConstants.DATE_FORMAT));
    };
    this.datePicker = new Flatpickr(this.el.nativeElement, <any>{
      utc: true,
      dateFormat: TravelRouteConstants.DATE_FORMAT,
      formatDate: (format: string, date: Date) => moment(date).format(format)
    });
  }

  ngOnDestroy(): void {
    this.datePicker.destroy();
  }

}
