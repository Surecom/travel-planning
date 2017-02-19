import {Component, ChangeDetectorRef, ViewChild, ChangeDetectionStrategy} from '@angular/core';
import {SliderComponent} from "./travel-route/slider/slider.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(){}

}
