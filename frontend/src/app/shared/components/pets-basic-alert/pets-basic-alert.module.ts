import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { PetsIcons222Module } from '../../modules/icons.module';

import { PetsBasicAlertComponent } from './pets-basic-alert.component';
import { PetsBasicAlertService } from './pets-basic-alert.service';
@NgModule({
  imports: [CommonModule, RouterModule, PetsIcons222Module, MatSnackBarModule],
  exports: [PetsBasicAlertComponent],
  declarations: [PetsBasicAlertComponent],
  providers: [PetsBasicAlertService],
})
export class PetsBasicAlertModule {}
