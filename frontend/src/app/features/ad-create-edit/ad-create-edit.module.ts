import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdCreateEditRoutingModule } from './ad-create-edit-routing.module';
import { AdCreateEditComponent } from './ad-create-edit.component';
import { TranslateModule } from '@ngx-translate/core';
import { PetsButtonModule } from 'src/app/shared/components/pets-button/pets-button.module';
import { PetsSweetAlertModule } from 'src/app/shared/components/pets-sweet-alert/pets-sweet-alert.module';
import { PetsAutocompleteModule } from 'src/app/shared/components/pets-autocomplete/pets-autocomplete.module';
import { PetsChipsModule } from 'src/app/shared/components/pets-chips/pets-chips.module';
import { PetsSelectModule } from 'src/app/shared/components/pets-select/pets-select.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [AdCreateEditComponent],
  exports: [AdCreateEditComponent],
  imports: [
    CommonModule,
    AdCreateEditRoutingModule,
    TranslateModule,
    PetsButtonModule,
    PetsSweetAlertModule,
    PetsAutocompleteModule,
    PetsChipsModule,
    PetsSelectModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
  ],
})
export class AdCreateEditModule {}
