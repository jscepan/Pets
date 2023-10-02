import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsAutocompleteComponent } from './pets-autocomplete.component';
import { MatButtonModule } from '@angular/material/button';
import { FeatherModule } from 'angular-feather';
import { PetsIcons222Module } from '../../modules/icons.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [PetsAutocompleteComponent],
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
  ],
  exports: [PetsAutocompleteComponent],
})
export class PetsAutocompleteModule {}
