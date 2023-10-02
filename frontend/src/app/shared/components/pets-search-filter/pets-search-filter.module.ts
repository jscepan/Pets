import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsSearchFilterComponent } from './pets-search-filter.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PetsIconsProviderModule } from '../../modules/pets-icons.module';

@NgModule({
  declarations: [PetsSearchFilterComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    PetsIconsProviderModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
  ],
  exports: [PetsSearchFilterComponent],
})
export class PetsSearchFilterModule {}
