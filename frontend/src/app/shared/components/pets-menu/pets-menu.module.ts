import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsMenuComponent } from './pets-menu.component';
import { MatButtonModule } from '@angular/material/button';
import { FeatherModule } from 'angular-feather';
import { MatMenuModule } from '@angular/material/menu';
import { PetsIconsProviderModule } from '../../modules/me-icons.module';

@NgModule({
  declarations: [PetsMenuComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FeatherModule,
    MatMenuModule,
    PetsIconsProviderModule,
  ],
  exports: [PetsMenuComponent],
})
export class PetsMenuModule {}
