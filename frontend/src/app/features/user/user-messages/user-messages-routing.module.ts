import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserMessagesComponent } from './user-messages.component';

const routes: Routes = [
  {
    path: '',
    component: UserMessagesComponent,
    canActivate: [],
    data: {},
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserMessagesRoutingModule {}
