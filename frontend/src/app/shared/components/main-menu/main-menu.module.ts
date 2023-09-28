import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu.component';
import { FeatherModule } from 'angular-feather';
import { IconsModule } from '../../modules/icons.module';
import { PetsButtonModule } from '../pets-button/pets-button.module';
import { TranslateModule } from '@ngx-translate/core';
import { SearchFilterModule } from '../search-filter/search-filter.module';
import { PetsMenuModule } from '../pets-menu/pets-menu.module';
import { MessageNotificationModule } from '../message-notification/message-notification.module';

@NgModule({
  declarations: [MainMenuComponent],
  imports: [
    CommonModule,
    FeatherModule,
    IconsModule,
    PetsButtonModule,
    TranslateModule,
    SearchFilterModule,
    PetsMenuModule,
    MessageNotificationModule,
  ],
  exports: [MainMenuComponent],
})
export class MainMenuModule {}
