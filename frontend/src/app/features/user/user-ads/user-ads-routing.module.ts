import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAdsComponent } from './user-ads.component';

const routes: Routes = [
  {
    path: '',
    component: UserAdsComponent,
    canActivate: [],
    data: {},
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserSettingsRoutingModule {}
