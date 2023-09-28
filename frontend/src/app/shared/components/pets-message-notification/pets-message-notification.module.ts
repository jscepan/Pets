import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsMessageNotificationComponent } from './pets-message-notification.component';
import { MatButtonModule } from '@angular/material/button';
import { FeatherModule } from 'angular-feather';
import { PetsIconsModule } from '../../modules/icons.module';

@NgModule({
  declarations: [PetsMessageNotificationComponent],
  imports: [CommonModule, MatButtonModule, FeatherModule, PetsIconsModule],
  exports: [PetsMessageNotificationComponent],
})
export class PetsMessageNotificationModule {}
