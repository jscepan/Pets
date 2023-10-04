import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   loadChildren: () =>
  //     import('@features/dashboard/dashboard.module').then(
  //       (m) => m.DashboardModule
  //     ),
  // },
  {
    path: 'register',
    loadChildren: () =>
      import('@features/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: 'forget-password',
    loadChildren: () =>
      import('@features/forget-password/forget-password.module').then(
        (m) => m.ForgetPasswordModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('@features/login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
