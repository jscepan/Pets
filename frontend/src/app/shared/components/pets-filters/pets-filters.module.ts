import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsFiltersComponent } from './pets-filters.component';
import { MatButtonModule } from '@angular/material/button';
import { PetsIconsProviderModule } from '../../modules/pets-icons.module';

@NgModule({
  declarations: [PetsFiltersComponent],
  imports: [CommonModule, MatButtonModule, PetsIconsProviderModule],
  exports: [PetsFiltersComponent],
})
export class PetsFiltersModule {}
