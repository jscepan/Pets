import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFavoritesComponent } from './user-favorites.component';

const routes: Routes = [
  {
    path: '',
    component: UserFavoritesComponent,
    canActivate: [],
    data: {},
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserFavoritesRoutingModule {}
