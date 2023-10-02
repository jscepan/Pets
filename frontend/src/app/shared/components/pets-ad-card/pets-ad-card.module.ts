import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsAdCardComponent } from './pets-ad-card.component';
import { MatButtonModule } from '@angular/material/button';
import { PetsIconsProviderModule } from '../../modules/pets-icons.module';

@NgModule({
  declarations: [PetsAdCardComponent],
  imports: [CommonModule, MatButtonModule, PetsIconsProviderModule],
  exports: [PetsAdCardComponent],
})
export class PetsAdCardModule {}
