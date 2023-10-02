import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsMessageNotificationComponent } from './pets-message-notification.component';
import { MatButtonModule } from '@angular/material/button';
import { FeatherModule } from 'angular-feather';
import { PetsIcons222Module } from '../../modules/icons.module';

@NgModule({
  declarations: [PetsMessageNotificationComponent],
  imports: [CommonModule, MatButtonModule, FeatherModule, PetsIcons222Module],
  exports: [PetsMessageNotificationComponent],
})
export class PetsMessageNotificationModule {}
