import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsFiltersComponent } from './pets-filters.component';
import { MatButtonModule } from '@angular/material/button';
import { FeatherModule } from 'angular-feather';
import { PetsIconsModule } from '../../modules/icons.module';

@NgModule({
  declarations: [PetsFiltersComponent],
  imports: [CommonModule, MatButtonModule, FeatherModule, PetsIconsModule],
  exports: [PetsFiltersComponent],
})
export class PetsFiltersModule {}
