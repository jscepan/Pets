import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete.component';
import { MatButtonModule } from '@angular/material/button';
import { FeatherModule } from 'angular-feather';
import { PetsIconsModule } from '../../modules/icons.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [AutocompleteComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FeatherModule,
    PetsIconsModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [AutocompleteComponent],
})
export class AutocompleteModule {}
