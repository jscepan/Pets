import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdCreateEditComponent } from './ad-create-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AdCreateEditComponent,
    canActivate: [],
    data: {},
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdCreateEditRoutingModule {}
