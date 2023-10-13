import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-routing.module';
import { CountryComponent } from './countries.component';
import { TranslateModule } from '@ngx-translate/core';
import { PetsButtonModule } from 'src/app/shared/components/pets-button/pets-button.module';
import { PetsSweetAlertModule } from 'src/app/shared/components/pets-sweet-alert/pets-sweet-alert.module';
import { PetsIconsProviderModule } from 'src/app/shared/modules/pets-icons.module';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { TranslateWithCapitalLettersPipe } from 'src/app/shared/pipes/translate-capital-letters.pipe';
import { CountryCreateEditModule } from './country-create-edit-popup/country-create-edit.module';

@NgModule({
  declarations: [CountryComponent],
  exports: [CountryComponent],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    TranslateModule,
    PetsButtonModule,
    PetsSweetAlertModule,
    PetsIconsProviderModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    TranslateWithCapitalLettersPipe,
    CountryCreateEditModule,
  ],
})
export class CountriesModule {}
