import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { PetsIconsModule } from '../../modules/icons.module';

import { PetsBasicAlertComponent } from './pets-basic-alert.component';
import { PetsBasicAlertService } from './pets-basic-alert.service';
@NgModule({
  imports: [CommonModule, RouterModule, PetsIconsModule, MatSnackBarModule],
  exports: [PetsBasicAlertComponent],
  declarations: [PetsBasicAlertComponent],
  providers: [PetsBasicAlertService],
})
export class PetsBasicAlertModule {}
