import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdCardComponent } from './ad-card.component';
import { MatButtonModule } from '@angular/material/button';
import { FeatherModule } from 'angular-feather';
import { IconsModule } from '../../modules/icons.module';

@NgModule({
  declarations: [AdCardComponent],
  imports: [CommonModule, MatButtonModule, FeatherModule, IconsModule],
  exports: [AdCardComponent],
})
export class AdCardModule {}
