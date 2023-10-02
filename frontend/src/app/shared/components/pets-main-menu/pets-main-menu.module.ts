import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsMainMenuComponent } from './pets-main-menu.component';
import { FeatherModule } from 'angular-feather';
import { PetsIcons222Module } from '../../modules/icons.module';
import { PetsButtonModule } from '../pets-button/pets-button.module';
import { TranslateModule } from '@ngx-translate/core';
import { PetsSearchFilterModule } from '../pets-search-filter/pets-search-filter.module';
import { PetsMenuModule } from '../pets-menu/pets-menu.module';
import { PetsMessageNotificationModule } from '../pets-message-notification/pets-message-notification.module';

@NgModule({
  declarations: [PetsMainMenuComponent],
  imports: [
    CommonModule,
    FeatherModule,
    PetsIcons222Module,
    PetsButtonModule,
    TranslateModule,
    PetsSearchFilterModule,
    PetsMenuModule,
    PetsMessageNotificationModule,
  ],
  exports: [PetsMainMenuComponent],
})
export class PetsMainMenuModule {}
