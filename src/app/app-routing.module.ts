import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelRouteComponent } from './travel-route/travel-route.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'travel',
  pathMatch: 'full'
}, {
  path: 'travel',
  component: TravelRouteComponent
}, {
  path: '**', redirectTo: 'travel'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
