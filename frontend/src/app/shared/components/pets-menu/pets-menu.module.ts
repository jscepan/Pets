import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsMenuComponent } from './pets-menu.component';
import { MatButtonModule } from '@angular/material/button';
import { FeatherModule } from 'angular-feather';
import { IconsModule } from '../../modules/icons.module';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [PetsMenuComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FeatherModule,
    IconsModule,
    MatMenuModule,
  ],
  exports: [PetsMenuComponent],
})
export class PetsMenuModule {}
