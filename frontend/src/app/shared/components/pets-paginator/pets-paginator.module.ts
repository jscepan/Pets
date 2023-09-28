import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsPaginatorComponent } from './pets-paginator.component';
import { MatButtonModule } from '@angular/material/button';
import { FeatherModule } from 'angular-feather';
import { PetsIconsModule } from '../../modules/icons.module';

@NgModule({
  declarations: [PetsPaginatorComponent],
  imports: [CommonModule, MatButtonModule, FeatherModule, PetsIconsModule],
  exports: [PetsPaginatorComponent],
})
export class PetsPaginatorModule {}
