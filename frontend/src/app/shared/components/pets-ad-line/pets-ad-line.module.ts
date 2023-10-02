import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsAdLineComponent } from './pets-ad-line.component';
import { MatButtonModule } from '@angular/material/button';
import { FeatherModule } from 'angular-feather';
import { PetsIcons222Module } from '../../modules/icons.module';

@NgModule({
  declarations: [PetsAdLineComponent],
  imports: [CommonModule, MatButtonModule, FeatherModule, PetsIcons222Module],
  exports: [PetsAdLineComponent],
})
export class PetsAdLineModule {}
