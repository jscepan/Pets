import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsFiltersAndSearchHeaderComponent } from './pets-filters-and-search-header.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PetsMenuModule } from '../pets-menu/pets-menu.module';
import { PetsIconsProviderModule } from '../../modules/pets-icons.module';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { PetsButtonModule } from '../pets-button/pets-button.module';
import { PetsSearchInputModule } from '../pets-search-input/pets-search-input.module';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [PetsFiltersAndSearchHeaderComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    PetsIconsProviderModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    PetsMenuModule,
    MatSelectModule,
    TranslateModule,
    PetsButtonModule,
    PetsSearchInputModule,
    MatChipsModule,
  ],
  exports: [PetsFiltersAndSearchHeaderComponent],
})
export class PetsFiltersAndSearchHeaderModule {}
