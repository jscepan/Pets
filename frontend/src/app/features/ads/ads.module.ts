import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsRoutingModule } from './ads-routing.module';
import { AdsComponent } from './ads.component';
import { TranslateModule } from '@ngx-translate/core';
import { PetsButtonModule } from 'src/app/shared/components/pets-button/pets-button.module';
import { SweetAlertModule } from 'src/app/shared/components/sweet-alert/sweet-alert.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { SearchFilterModule } from 'src/app/shared/components/search-filter/search-filter.module';

@NgModule({
  declarations: [AdsComponent],
  exports: [AdsComponent],
  imports: [
    CommonModule,
    AdsRoutingModule,
    TranslateModule,
    PetsButtonModule,
    SweetAlertModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    SearchFilterModule,
  ],
})
export class AdsModule {}
