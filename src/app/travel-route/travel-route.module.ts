import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DBModule } from '@ngrx/db';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import {
  MdDialogModule,
  MdButtonModule,
  MdSnackBarModule,
  MdSidenavModule,
  MdTabsModule,
  MdTooltipModule,
  MdProgressSpinnerModule
} from '@angular/material';

import { schema } from './db';

import { reducer } from './reducers/reducer';

import { TravelRouteRoutingModule } from './travel-route-routing.module';
import { TravelRouteComponent } from './travel-route.component';
import { SliderComponent } from './slider/slider.component';
import { SliderService } from './services/slider.service';
import { CityPointComponent } from './city-point/city-point.component';
import { CityAddComponent } from './city-add/city-add.component';
import { CityEffectsService } from './effects/city-effects.service';
import { CitiesListComponent } from './cities-list/cities-list.component';
import { TransferListComponent } from './transfer-list/transfer-list.component';
import { CityCrossingModalComponent } from './city-crossing-modal/city-crossing-modal.component';
import { TransferEffectsService } from './effects/transfer-effects.service';
import { TotalDaysComponent } from './total-days/total-days.component';
import { CityViewComponent } from './city-view/city-view.component';
import { CityUpdateComponent } from './city-update/city-update.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { DatePickerDirective } from './date-time-pickers/date-picker.directive';
import { TimePickerDirective } from './date-time-pickers/time-picker.directive';
import { TransferViewComponent } from './transfer-view/transfer-view.component';
import { TransferEditComponent } from './transfer-edit/transfer-edit.component';
import { TransferPointComponent } from './transfer-point/transfer-point.component';
import { TotalCostComponent } from './total-cost/total-cost.component';
import { UploadModalComponent } from './upload-modal/upload-modal.component';
import { ImportModalComponent } from './import-modal/import-modal.component';
import { TravelEffectsService } from './effects/travel-effects';
import { TravelListComponent } from './travel-list/travel-list.component';
import { TravelPointComponent } from './travel-point/travel-point.component';
import { AddTravelModalComponent } from './add-travel-modal/add-travel-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    TravelRouteRoutingModule,
    ReactiveFormsModule,

    StoreModule.provideStore({
      travel: reducer
    }),
    EffectsModule.run(CityEffectsService),
    EffectsModule.run(TransferEffectsService),
    EffectsModule.run(TravelEffectsService),
    DBModule.provideDB(schema),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),

    MdDialogModule,
    MdButtonModule,
    MdProgressSpinnerModule,
    MdSnackBarModule,
    MdSidenavModule,
    MdTabsModule,
    MdTooltipModule
  ],
  entryComponents: [
    CityCrossingModalComponent,
    UploadModalComponent,
    ImportModalComponent,
    AddTravelModalComponent
  ],
  declarations: [
    TravelRouteComponent,
    SliderComponent,
    CityPointComponent,
    CityAddComponent,
    CitiesListComponent,
    TransferListComponent,
    CityCrossingModalComponent,
    TotalDaysComponent,
    CityViewComponent,
    CityUpdateComponent,
    TextEditorComponent,
    DatePickerDirective,
    TimePickerDirective,
    TransferViewComponent,
    TransferEditComponent,
    TransferPointComponent,
    TotalCostComponent,
    UploadModalComponent,
    ImportModalComponent,
    TravelListComponent,
    TravelPointComponent,
    AddTravelModalComponent
  ],
  exports: [TravelRouteComponent],
  providers: [SliderService]
})
export class TravelRouteModule { }
