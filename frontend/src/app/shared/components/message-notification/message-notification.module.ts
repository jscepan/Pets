import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageNotificationComponent } from './message-notification.component';
import { MatButtonModule } from '@angular/material/button';
import { FeatherModule } from 'angular-feather';
import { IconsModule } from '../../modules/icons.module';

@NgModule({
  declarations: [MessageNotificationComponent],
  imports: [CommonModule, MatButtonModule, FeatherModule, IconsModule],
  exports: [MessageNotificationComponent],
})
export class MessageNotificationModule {}
