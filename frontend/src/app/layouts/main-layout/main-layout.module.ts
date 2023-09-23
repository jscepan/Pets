import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';
import { TranslateModule } from '@ngx-translate/core';
import { MainRoutingModule } from './main-routing.module';
import { AdsModule } from '@features/ads/ads.module';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    MainRoutingModule,
    AdsModule,
  ],
  providers: [],
})
export class MainLayoutModule {}
