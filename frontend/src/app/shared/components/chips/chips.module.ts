import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsComponent } from './chips.component';
import { MatButtonModule } from '@angular/material/button';
import { FeatherModule } from 'angular-feather';
import { PetsIconsModule } from '../../modules/icons.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ChipsComponent],
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
    MatChipsModule,
    MatIconModule,
  ],
  exports: [ChipsComponent],
})
export class ChipsModule {}
