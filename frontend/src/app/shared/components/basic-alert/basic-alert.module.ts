import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { PetsIconsModule } from '../../modules/icons.module';

import { BasicAlertComponent } from './basic-alert.component';
import { BasicAlertService } from './basic-alert.service';
@NgModule({
  imports: [CommonModule, RouterModule, PetsIconsModule, MatSnackBarModule],
  exports: [BasicAlertComponent],
  declarations: [BasicAlertComponent],
  providers: [BasicAlertService],
})
export class BasicAlertModule {}
