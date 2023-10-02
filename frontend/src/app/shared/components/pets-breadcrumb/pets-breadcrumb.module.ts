import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsBreadcrumbComponent } from './pets-breadcrumb.component';
import { MatButtonModule } from '@angular/material/button';
import { FeatherModule } from 'angular-feather';
import { PetsIcons222Module } from '../../modules/icons.module';

@NgModule({
  declarations: [PetsBreadcrumbComponent],
  imports: [CommonModule, MatButtonModule, FeatherModule, PetsIcons222Module],
  exports: [PetsBreadcrumbComponent],
})
export class PetsBreadcrumbModule {}
