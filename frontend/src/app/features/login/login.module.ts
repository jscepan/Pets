import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { SweetAlertModule } from 'src/app/shared/components/sweet-alert/sweet-alert.module';
import { AutocompleteModule } from 'src/app/shared/components/autocomplete/autocomplete.module';
import { ChipsModule } from 'src/app/shared/components/chips/chips.module';
import { SelectModule } from 'src/app/shared/components/select/select.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    TranslateModule,
    ButtonModule,
    SweetAlertModule,
    AutocompleteModule,
    ChipsModule,
    SelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
