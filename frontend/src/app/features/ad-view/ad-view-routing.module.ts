import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdViewComponent } from './ad-view.component';

const routes: Routes = [
  {
    path: '',
    component: AdViewComponent,
    canActivate: [],
    data: {},
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdViewRoutingModule {}
