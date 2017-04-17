import { Component, EventEmitter, Input, OnChanges, Output, QueryList } from '@angular/core';
import { MdDialog } from '@angular/material';

import { TravelModel } from '../models/travel.model';
import { AddTravelModalComponent } from '../add-travel-modal/add-travel-modal.component';

@Component({
  selector: '[travel-list]',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss']
})
export class TravelListComponent implements OnChanges {

  @Input()
  private travels: QueryList<TravelModel>;

  @Output()
  private disableTab: EventEmitter<string> = new EventEmitter();

  constructor(private dialog: MdDialog) { }

  ngOnChanges() {
    if (this.travels.length > 0) {
      this.disableTab.emit('enabled');
    } else {
      this.disableTab.emit('disabled');
    }
  }

  showAddTravelModal() {
    this.dialog.open(AddTravelModalComponent, {disableClose: true});
  }
}
