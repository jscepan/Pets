import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsCarouselComponent } from './pets-carousel.component';
import { MatButtonModule } from '@angular/material/button';
import { PetsIconsProviderModule } from '../../modules/pets-icons.module';

@NgModule({
  declarations: [PetsCarouselComponent],
  imports: [CommonModule, MatButtonModule, PetsIconsProviderModule],
  exports: [PetsCarouselComponent],
})
export class PetsCarouselModule {}
