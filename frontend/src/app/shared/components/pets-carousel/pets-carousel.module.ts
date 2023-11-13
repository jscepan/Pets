import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsCarouselComponent } from './pets-carousel.component';
import { PetsIconsProviderModule } from '../../modules/pets-icons.module';
import { PetsButtonModule } from '../pets-button/pets-button.module';

@NgModule({
  declarations: [PetsCarouselComponent],
  imports: [CommonModule, PetsButtonModule, PetsIconsProviderModule],
  exports: [PetsCarouselComponent],
})
export class PetsCarouselModule {}
