import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsMessageNotificationComponent } from './pets-message-notification.component';
import { MatButtonModule } from '@angular/material/button';
import { PetsIconsProviderModule } from '../../modules/pets-icons.module';

@NgModule({
  declarations: [PetsMessageNotificationComponent],
  imports: [CommonModule, MatButtonModule, PetsIconsProviderModule],
  exports: [PetsMessageNotificationComponent],
})
export class PetsMessageNotificationModule {}
