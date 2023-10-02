import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';

import { PetsBasicAlertComponent } from './pets-basic-alert.component';
import { PetsBasicAlertService } from './pets-basic-alert.service';
import { PetsIconsProviderModule } from '../../modules/pets-icons.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PetsIconsProviderModule,
    MatSnackBarModule,
  ],
  exports: [PetsBasicAlertComponent],
  declarations: [PetsBasicAlertComponent],
  providers: [PetsBasicAlertService],
})
export class PetsBasicAlertModule {}
