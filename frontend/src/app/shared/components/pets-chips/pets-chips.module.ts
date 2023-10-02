import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsChipsComponent } from './pets-chips.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { PetsIconsProviderModule } from '../../modules/pets-icons.module';

@NgModule({
  declarations: [PetsChipsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    PetsIconsProviderModule,
  ],
  exports: [PetsChipsComponent],
})
export class PetsChipsModule {}
