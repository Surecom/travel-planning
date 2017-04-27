import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelRouteComponent } from './travel-route/travel-route.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/',
  pathMatch: 'full'
}, {
  path: '',
  component: TravelRouteComponent
}, {
  path: '**', redirectTo: '/'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
