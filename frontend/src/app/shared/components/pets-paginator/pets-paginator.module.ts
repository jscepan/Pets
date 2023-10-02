import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsPaginatorComponent } from './pets-paginator.component';
import { MatButtonModule } from '@angular/material/button';
import { FeatherModule } from 'angular-feather';
import { PetsIcons222Module } from '../../modules/icons.module';

@NgModule({
  declarations: [PetsPaginatorComponent],
  imports: [CommonModule, MatButtonModule, FeatherModule, PetsIcons222Module],
  exports: [PetsPaginatorComponent],
})
export class PetsPaginatorModule {}
