import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsAdCardComponent } from './pets-ad-card.component';
import { MatButtonModule } from '@angular/material/button';
import { FeatherModule } from 'angular-feather';
import { PetsIconsModule } from '../../modules/icons.module';

@NgModule({
  declarations: [PetsAdCardComponent],
  imports: [CommonModule, MatButtonModule, FeatherModule, PetsIconsModule],
  exports: [PetsAdCardComponent],
})
export class PetsAdCardModule {}
