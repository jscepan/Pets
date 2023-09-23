import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdLineComponent } from './ad-line.component';
import { MatButtonModule } from '@angular/material/button';
import { FeatherModule } from 'angular-feather';
import { IconsModule } from '../../modules/icons.module';

@NgModule({
  declarations: [AdLineComponent],
  imports: [CommonModule, MatButtonModule, FeatherModule, IconsModule],
  exports: [AdLineComponent],
})
export class AdLineModule {}
