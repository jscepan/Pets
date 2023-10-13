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
    path: 'cities',
    loadChildren: () =>
      import('@backoffice/cities/cities.module').then((m) => m.CitiesModule),
  },
  {
    path: 'countries',
    loadChildren: () =>
      import('@backoffice/countries/countries.module').then(
        (m) => m.CountriesModule
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
