import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackOfficeLayoutComponent } from './back-office-layout.component';
import { TranslateModule } from '@ngx-translate/core';
import { BackOfficeRoutingModule } from './back-office-routing.module';
import { AdsModule } from '@features/ads/ads.module';
import { DashboardModule } from '@features/dashboard/dashboard.module';
import { PetsButtonModule } from 'src/app/shared/components/pets-button/pets-button.module';
import { PetsMainMenuModule } from 'src/app/shared/components/pets-main-menu/pets-main-menu.module';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [BackOfficeLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    BackOfficeRoutingModule,
    AdsModule,
    DashboardModule,
    PetsButtonModule,
    PetsMainMenuModule,
    MatMenuModule,
  ],
  providers: [],
})
export class BackOfficeLayoutModule {}
