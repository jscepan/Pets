import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsBreadcrumbComponent } from './pets-breadcrumb.component';
import { MatButtonModule } from '@angular/material/button';
import { FeatherModule } from 'angular-feather';
import { PetsIconsModule } from '../../modules/icons.module';

@NgModule({
  declarations: [PetsBreadcrumbComponent],
  imports: [CommonModule, MatButtonModule, FeatherModule, PetsIconsModule],
  exports: [PetsBreadcrumbComponent],
})
export class PetsBreadcrumbModule {}
