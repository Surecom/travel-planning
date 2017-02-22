import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[city-crossing]',
  templateUrl: './city-crossing.component.html',
  styleUrls: ['./city-crossing.component.scss']
})
export class CityCrossingComponent implements OnInit {

  private show = false;
  constructor() { }
  ngOnInit() {
  }

  showModal() {
     this.show = true;
  }

  hideModal() {
    this.show = false;
  }

}
