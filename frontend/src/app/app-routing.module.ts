import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from '@layouts/auth-layout/auth-layout.component';
import { BackOfficeLayoutComponent } from '@layouts/back-office-layout/back-office-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    loadChildren: () =>
      import('@layouts/main-layout/main-layout.module').then(
        (m) => m.MainLayoutModule
      ),
    canActivate: [],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('@layouts/auth-layout/auth-layout.module').then(
        (m) => m.AuthLayoutModule
      ),
    canActivate: [],
  },
  {
    path: 'back-office',
    component: BackOfficeLayoutComponent,
    loadChildren: () =>
      import('@layouts/back-office-layout/back-office-layout.module').then(
        (m) => m.BackOfficeLayoutModule
      ),
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
