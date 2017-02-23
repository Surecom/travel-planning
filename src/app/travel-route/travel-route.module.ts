import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelRouteRoutingModule } from './travel-route-routing.module';
import { TravelRouteComponent } from './travel-route.component';
import { SliderComponent } from './slider/slider.component';
import { SliderService } from './services/slider.service';
import { CityPointComponent } from './city-point/city-point.component';
import { CityAddComponent } from './city-add/city-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CitiesListComponent } from './cities-list/cities-list.component';
import { StoreModule } from '@ngrx/store';
import { reducer as CityReducer } from './reducers/city.reducer';
import { reducer as TransferReducer } from './reducers/transfer.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CityEffectsService } from './effects/city-effects.service';
import { schema } from './db';
import { DBModule } from '@ngrx/db';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MaterialModule } from '@angular/material';
import { TotalDaysComponent } from './total-days/total-days.component';
import { CityCrossingComponent } from './city-crossing/city-crossing.component';
import { CityCrossingModalComponent } from './city-crossing-modal/city-crossing-modal.component';
import { TransferEffectsService } from './effects/transfer-effects.service';

@NgModule({
  imports: [
    CommonModule,
    TravelRouteRoutingModule,
    ReactiveFormsModule,
    StoreModule.provideStore({
      cities: CityReducer,
      transfers: TransferReducer
    }),
    EffectsModule.run(CityEffectsService),
    EffectsModule.run(TransferEffectsService),
    DBModule.provideDB(schema),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    MaterialModule
  ],
  entryComponents: [
    CityCrossingModalComponent
  ],
  declarations: [
    TravelRouteComponent,
    SliderComponent,
    CityPointComponent,
    CityAddComponent,
    CitiesListComponent,
    TotalDaysComponent,
    CityCrossingComponent,
    CityCrossingModalComponent
  ],
  exports: [TravelRouteComponent],
  providers: [SliderService]
})
export class TravelRouteModule { }
