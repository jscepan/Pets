import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateLayoutComponent } from './create-layout.component';
import { TranslateModule } from '@ngx-translate/core';
import { CreateRoutingModule } from './create-routing.module';
import { AdsModule } from '@features/ads/ads.module';
import { DashboardModule } from '@features/dashboard/dashboard.module';
import { PetsButtonModule } from 'src/app/shared/components/pets-button/pets-button.module';
import { PetsMainMenuModule } from 'src/app/shared/components/pets-main-menu/pets-main-menu.module';

@NgModule({
  declarations: [CreateLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    CreateRoutingModule,
    AdsModule,
    DashboardModule,
    PetsButtonModule,
    PetsMainMenuModule,
  ],
  providers: [],
})
export class CreateLayoutModule {}
