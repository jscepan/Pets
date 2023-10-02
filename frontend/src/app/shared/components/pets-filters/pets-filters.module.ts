import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsFiltersComponent } from './pets-filters.component';
import { MatButtonModule } from '@angular/material/button';
import { FeatherModule } from 'angular-feather';
import { PetsIcons222Module } from '../../modules/icons.module';

@NgModule({
  declarations: [PetsFiltersComponent],
  imports: [CommonModule, MatButtonModule, FeatherModule, PetsIcons222Module],
  exports: [PetsFiltersComponent],
})
export class PetsFiltersModule {}
