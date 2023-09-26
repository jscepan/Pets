import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FeatherModule } from 'angular-feather';
import { IconsModule } from '../../modules/icons.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SelectComponent } from './select.component';

@NgModule({
  declarations: [SelectComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FeatherModule,
    IconsModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [SelectComponent],
})
export class SelectModule {}
