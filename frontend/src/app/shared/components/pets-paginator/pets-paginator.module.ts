import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsPaginatorComponent } from './pets-paginator.component';
import { MatButtonModule } from '@angular/material/button';
import { PetsIconsProviderModule } from '../../modules/pets-icons.module';

@NgModule({
  declarations: [PetsPaginatorComponent],
  imports: [CommonModule, MatButtonModule, PetsIconsProviderModule],
  exports: [PetsPaginatorComponent],
})
export class PetsPaginatorModule {}
