import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsMessageNotificationComponent } from './pets-message-notification.component';
import { MatButtonModule } from '@angular/material/button';
import { PetsIconsProviderModule } from '../../modules/pets-icons.module';
import { PetsButtonModule } from '../pets-button/pets-button.module';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [PetsMessageNotificationComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    PetsIconsProviderModule,
    PetsButtonModule,
    MatBadgeModule,
  ],
  exports: [PetsMessageNotificationComponent],
})
export class PetsMessageNotificationModule {}
