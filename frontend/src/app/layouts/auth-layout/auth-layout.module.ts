import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout.component';
import { TranslateModule } from '@ngx-translate/core';
import { MainRoutingModule } from './auth-routing.module';
import { AdsModule } from '@features/ads/ads.module';
import { DashboardModule } from '@features/dashboard/dashboard.module';

@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    MainRoutingModule,
    AdsModule,
    DashboardModule,
  ],
  providers: [],
})
export class AuthLayoutModule {}
