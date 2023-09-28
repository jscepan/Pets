import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsButtonComponent } from './pets-button.component';
import { MatButtonModule } from '@angular/material/button';
import { FeatherModule } from 'angular-feather';
import { IconsModule } from '../../modules/icons.module';

@NgModule({
  declarations: [PetsButtonComponent],
  imports: [CommonModule, MatButtonModule, FeatherModule, IconsModule],
  exports: [PetsButtonComponent],
})
export class PetsButtonModule {}
