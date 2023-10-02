import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsBreadcrumbComponent } from './pets-breadcrumb.component';
import { MatButtonModule } from '@angular/material/button';
import { PetsIconsProviderModule } from '../../modules/pets-icons.module';

@NgModule({
  declarations: [PetsBreadcrumbComponent],
  imports: [CommonModule, MatButtonModule, PetsIconsProviderModule],
  exports: [PetsBreadcrumbComponent],
})
export class PetsBreadcrumbModule {}
