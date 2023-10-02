import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PetsSweetAlertComponent } from './pets-sweet-alert.component';
import { PetsSweetAlertService } from './pets-sweet-alert.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PetsButtonModule } from '../pets-button/pets-button.module';
import { SafePipeModule } from 'safe-pipe';
import { PetsIcons222Module } from '../../modules/icons.module';

@NgModule({
  imports: [
    CommonModule,
    PetsIcons222Module,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule,
    PetsButtonModule,
    SafePipeModule,
    MatTooltipModule,
  ],
  declarations: [PetsSweetAlertComponent],
  exports: [PetsSweetAlertComponent],
  providers: [PetsSweetAlertService],
})
export class PetsSweetAlertModule {}
