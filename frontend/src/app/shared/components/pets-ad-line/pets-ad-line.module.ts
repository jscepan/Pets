import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsAdLineComponent } from './pets-ad-line.component';
import { MatButtonModule } from '@angular/material/button';
import { PetsIconsProviderModule } from '../../modules/pets-icons.module';

@NgModule({
  declarations: [PetsAdLineComponent],
  imports: [CommonModule, MatButtonModule, PetsIconsProviderModule],
  exports: [PetsAdLineComponent],
})
export class PetsAdLineModule {}
