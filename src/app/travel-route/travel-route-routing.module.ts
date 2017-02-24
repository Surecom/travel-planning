import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CityAddComponent } from './city-add/city-add.component';
import { CitiesListComponent } from './cities-list/cities-list.component';

const routes: Routes = [{
  path: 'travel/city-list',
  component: CitiesListComponent
}, {
  path: 'travel/city-add',
  component: CityAddComponent,
  children: []
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TravelRouteRoutingModule {}
