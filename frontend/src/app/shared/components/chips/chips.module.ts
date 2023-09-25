import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsComponent } from './chips.component';
import { MatButtonModule } from '@angular/material/button';
import { FeatherModule } from 'angular-feather';
import { IconsModule } from '../../modules/icons.module';

@NgModule({
  declarations: [ChipsComponent],
  imports: [CommonModule, MatButtonModule, FeatherModule, IconsModule],
  exports: [ChipsComponent],
})
export class ChipsModule {}
