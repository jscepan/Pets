import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsAutocompleteComponent } from './pets-autocomplete.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PetsIconsProviderModule } from '../../modules/pets-icons.module';

@NgModule({
  declarations: [PetsAutocompleteComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    PetsIconsProviderModule,
  ],
  exports: [PetsAutocompleteComponent],
})
export class PetsAutocompleteModule {}
