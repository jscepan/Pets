import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsFiltersComponent } from './pets-filters.component';
import { MatButtonModule } from '@angular/material/button';
import { PetsIconsProviderModule } from '../../modules/pets-icons.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { PetsSelectModule } from '../pets-select/pets-select.module';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { PetsAutocompleteModule } from '../pets-autocomplete/pets-autocomplete.module';
import { PetsButtonModule } from '../pets-button/pets-button.module';

@NgModule({
  declarations: [PetsFiltersComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    PetsIconsProviderModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    PetsSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    PetsAutocompleteModule,
    PetsButtonModule,
  ],
  exports: [PetsFiltersComponent],
})
export class PetsFiltersModule {}
