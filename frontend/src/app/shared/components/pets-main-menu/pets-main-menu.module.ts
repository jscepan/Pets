import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsMainMenuComponent } from './pets-main-menu.component';
import { PetsButtonModule } from '../pets-button/pets-button.module';
import { TranslateModule } from '@ngx-translate/core';
import { PetsSearchInputModule } from '../pets-search-input/pets-search-input.module';
import { PetsMenuModule } from '../pets-menu/pets-menu.module';
import { PetsMessageNotificationModule } from '../pets-message-notification/pets-message-notification.module';
import { PetsIconsProviderModule } from '../../modules/pets-icons.module';

@NgModule({
  declarations: [PetsMainMenuComponent],
  imports: [
    CommonModule,
    PetsIconsProviderModule,
    PetsButtonModule,
    TranslateModule,
    PetsSearchInputModule,
    PetsMenuModule,
    PetsMessageNotificationModule,
  ],
  exports: [PetsMainMenuComponent],
})
export class PetsMainMenuModule {}
