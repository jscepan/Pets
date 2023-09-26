import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { SweetAlertModule } from 'src/app/shared/components/sweet-alert/sweet-alert.module';
import { AutocompleteModule } from 'src/app/shared/components/autocomplete/autocomplete.module';
import { ChipsModule } from 'src/app/shared/components/chips/chips.module';
import { SelectModule } from 'src/app/shared/components/select/select.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    TranslateModule,
    ButtonModule,
    SweetAlertModule,
    AutocompleteModule,
    ChipsModule,
    SelectModule,
  ],
  exports: [RegisterComponent],
})
export class RegisterModule {}
