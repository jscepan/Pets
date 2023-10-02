import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsChipsComponent } from './pets-chips.component';
import { MatButtonModule } from '@angular/material/button';
import { FeatherModule } from 'angular-feather';
import { PetsIcons222Module } from '../../modules/icons.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [PetsChipsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FeatherModule,
    PetsIcons222Module,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
  ],
  exports: [PetsChipsComponent],
})
export class PetsChipsModule {}
