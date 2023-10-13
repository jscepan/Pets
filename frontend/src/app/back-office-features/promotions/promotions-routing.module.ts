import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromotionsComponent } from './promotions.component';

const routes: Routes = [
  {
    path: '',
    component: PromotionsComponent,
    canActivate: [],
    data: {},
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromotionsRoutingModule {}
