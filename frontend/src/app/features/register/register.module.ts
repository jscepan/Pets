import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { TranslateModule } from '@ngx-translate/core';
import { PetsButtonModule } from 'src/app/shared/components/pets-button/pets-button.module';
import { PetsSweetAlertModule } from 'src/app/shared/components/pets-sweet-alert/pets-sweet-alert.module';
import { AutocompleteModule } from 'src/app/shared/components/autocomplete/autocomplete.module';
import { ChipsModule } from 'src/app/shared/components/chips/chips.module';
import { PetsSelectModule } from 'src/app/shared/components/pets-select/pets-select.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    TranslateModule,
    PetsButtonModule,
    PetsSweetAlertModule,
    AutocompleteModule,
    ChipsModule,
    PetsSelectModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [RegisterComponent],
})
export class RegisterModule {}
