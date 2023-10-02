import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsSearchFilterComponent } from './pets-search-filter.component';
import { MatButtonModule } from '@angular/material/button';
import { FeatherModule } from 'angular-feather';
import { PetsIcons222Module } from '../../modules/icons.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [PetsSearchFilterComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FeatherModule,
    PetsIcons222Module,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
  ],
  exports: [PetsSearchFilterComponent],
})
export class PetsSearchFilterModule {}
