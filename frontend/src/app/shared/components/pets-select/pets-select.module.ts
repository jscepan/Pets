import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PetsSelectComponent } from './pets-select.component';
import { PetsIconsProviderModule } from '../../modules/pets-icons.module';

@NgModule({
  declarations: [PetsSelectComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    PetsIconsProviderModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [PetsSelectComponent],
})
export class PetsSelectModule {}
