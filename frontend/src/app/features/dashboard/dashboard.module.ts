import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TranslateModule } from '@ngx-translate/core';
import { PetsButtonModule } from 'src/app/shared/components/pets-button/pets-button.module';
import { PetsSweetAlertModule } from 'src/app/shared/components/pets-sweet-alert/pets-sweet-alert.module';
import { AutocompleteModule } from 'src/app/shared/components/autocomplete/autocomplete.module';
import { ChipsModule } from 'src/app/shared/components/chips/chips.module';
import { PetsSelectModule } from 'src/app/shared/components/pets-select/pets-select.module';

@NgModule({
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TranslateModule,
    PetsButtonModule,
    PetsSweetAlertModule,
    AutocompleteModule,
    ChipsModule,
    PetsSelectModule,
  ],
})
export class DashboardModule {}
