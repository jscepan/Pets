import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsButtonComponent } from './pets-button.component';
import { MatButtonModule } from '@angular/material/button';
import { PetsIconsProviderModule } from '../../modules/pets-icons.module';

@NgModule({
  declarations: [PetsButtonComponent],
  imports: [CommonModule, MatButtonModule, PetsIconsProviderModule],
  exports: [PetsButtonComponent],
})
export class PetsButtonModule {}
