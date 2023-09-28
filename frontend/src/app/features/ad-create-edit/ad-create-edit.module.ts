import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdCreateEditRoutingModule } from './ad-create-edit-routing.module';
import { AdCreateEditComponent } from './ad-create-edit.component';
import { TranslateModule } from '@ngx-translate/core';
import { PetsButtonModule } from 'src/app/shared/components/pets-button/pets-button.module';
import { PetsSweetAlertModule } from 'src/app/shared/components/pets-sweet-alert/pets-sweet-alert.module';
import { AutocompleteModule } from 'src/app/shared/components/autocomplete/autocomplete.module';
import { ChipsModule } from 'src/app/shared/components/chips/chips.module';
import { PetsSelectModule } from 'src/app/shared/components/pets-select/pets-select.module';

@NgModule({
  declarations: [AdCreateEditComponent],
  exports: [AdCreateEditComponent],
  imports: [
    CommonModule,
    AdCreateEditRoutingModule,
    TranslateModule,
    PetsButtonModule,
    PetsSweetAlertModule,
    AutocompleteModule,
    ChipsModule,
    PetsSelectModule,
  ],
})
export class AdCreateEditModule {}
