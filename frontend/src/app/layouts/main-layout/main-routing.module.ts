import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'terms-and-conditions',
    loadChildren: () =>
      import('@features/terms-and-conditions/terms-and-conditions.module').then(
        (m) => m.TermsAndConditionsModule
      ),
  },
  {
    path: 'ads',
    loadChildren: () =>
      import('@features/ads/ads.module').then((m) => m.AdsModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('@features/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'ad-view/:oid',
    loadChildren: () =>
      import('@features/ad-view/ad-view.module').then((m) => m.AdViewModule),
  },
  {
    path: 'ad-create-edit',
    loadChildren: () =>
      import('@features/ad-create-edit/ad-create-edit.module').then(
        (m) => m.AdCreateEditModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
