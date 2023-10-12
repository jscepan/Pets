import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesRoutingModule } from './cities-routing.module';
import { CitiesComponent } from './cities.component';
import { TranslateModule } from '@ngx-translate/core';
import { PetsButtonModule } from 'src/app/shared/components/pets-button/pets-button.module';
import { PetsSweetAlertModule } from 'src/app/shared/components/pets-sweet-alert/pets-sweet-alert.module';
import { PetsIconsProviderModule } from 'src/app/shared/modules/pets-icons.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [CitiesComponent],
  exports: [CitiesComponent],
  imports: [
    CommonModule,
    CitiesRoutingModule,
    TranslateModule,
    PetsButtonModule,
    PetsSweetAlertModule,
    PetsIconsProviderModule,
    MatTableModule,
  ],
})
export class CitiesModule {}
