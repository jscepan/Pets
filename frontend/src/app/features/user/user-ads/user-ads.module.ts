import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSettingsRoutingModule } from './user-ads-routing.module';
import { UserAdsComponent } from './user-ads.component';
import { TranslateModule } from '@ngx-translate/core';
import { PetsButtonModule } from 'src/app/shared/components/pets-button/pets-button.module';
import { PetsSweetAlertModule } from 'src/app/shared/components/pets-sweet-alert/pets-sweet-alert.module';
import { PetsAutocompleteModule } from 'src/app/shared/components/pets-autocomplete/pets-autocomplete.module';
import { PetsChipsModule } from 'src/app/shared/components/pets-chips/pets-chips.module';
import { PetsSelectModule } from 'src/app/shared/components/pets-select/pets-select.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PetsIconsProviderModule } from 'src/app/shared/modules/pets-icons.module';

@NgModule({
  declarations: [UserAdsComponent],
  imports: [
    CommonModule,
    UserSettingsRoutingModule,
    TranslateModule,
    PetsButtonModule,
    PetsSweetAlertModule,
    PetsAutocompleteModule,
    PetsChipsModule,
    PetsSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    PetsIconsProviderModule,
  ],
  exports: [UserAdsComponent],
})
export class UserAdsModule {}
