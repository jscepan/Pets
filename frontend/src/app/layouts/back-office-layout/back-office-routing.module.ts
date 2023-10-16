import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@backoffice/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'ads',
    loadChildren: () =>
      import('@backoffice/ads/ads.module').then((m) => m.AdsModule),
  },
  {
    path: 'cities',
    loadChildren: () =>
      import('@backoffice/cities/cities.module').then((m) => m.CitiesModule),
  },
  {
    path: 'terms',
    loadChildren: () =>
      import('@backoffice/terms/terms.module').then((m) => m.TermsModule),
  },
  {
    path: 'countries',
    loadChildren: () =>
      import('@backoffice/countries/countries.module').then(
        (m) => m.CountriesModule
      ),
  },
  {
    path: 'promotions',
    loadChildren: () =>
      import('@backoffice/promotions/promotions.module').then(
        (m) => m.PromotionsModule
      ),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('@backoffice/users/users.module').then((m) => m.UsersModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackOfficeRoutingModule {}
