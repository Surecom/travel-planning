import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'city-crossing-modal',
  templateUrl: './city-crossing-modal.component.html',
  styleUrls: ['./city-crossing-modal.component.scss']
})
export class CityCrossingModalComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<CityCrossingModalComponent>) { }

  ngOnInit() {
  }

}
