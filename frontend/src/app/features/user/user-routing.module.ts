import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'my-ads',
    loadChildren: () =>
      import('./user-ads/user-ads.module').then((m) => m.UserAdsModule),
  },
  {
    path: 'messages',
    loadChildren: () =>
      import('./user-messages/user-messages.module').then(
        (m) => m.UserMessagesModule
      ),
  },
  {
    path: 'favorites',
    loadChildren: () =>
      import('./user-favorites/user-favorites.module').then(
        (m) => m.UserFavoritesModule
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./user-settings/user-settings.module').then(
        (m) => m.UserSettingsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
