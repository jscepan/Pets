import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsRoutingModule } from './ads-routing.module';
import { AdsComponent } from './ads.component';
import { TranslateModule } from '@ngx-translate/core';
import { PetsButtonModule } from 'src/app/shared/components/pets-button/pets-button.module';
import { PetsSweetAlertModule } from 'src/app/shared/components/pets-sweet-alert/pets-sweet-alert.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { PetsSearchInputModule } from 'src/app/shared/components/pets-search-input/pets-search-input.module';
import { PetsFiltersModule } from 'src/app/shared/components/pets-filters/pets-filters.module';
import { PetsSearchBarModule } from 'src/app/shared/components/pets-search-bar/pets-search-bar.module';
import { PetsAdCardModule } from 'src/app/shared/components/pets-ad-card/pets-ad-card.module';
import { PetsPaginatorModule } from 'src/app/shared/components/pets-paginator/pets-paginator.module';
import { PetsAdLineModule } from 'src/app/shared/components/pets-ad-line/pets-ad-line.module';
import { PetsSelectedFiltersModule } from 'src/app/shared/components/pets-selected-filters/pets-selected-filters.module';

@NgModule({
  declarations: [AdsComponent],
  exports: [AdsComponent],
  imports: [
    CommonModule,
    AdsRoutingModule,
    TranslateModule,
    PetsButtonModule,
    PetsSweetAlertModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    PetsSearchInputModule,
    PetsFiltersModule,
    PetsSearchBarModule,
    PetsAdCardModule,
    PetsAdLineModule,
    PetsPaginatorModule,
    PetsSelectedFiltersModule,
  ],
})
export class AdsModule {}
