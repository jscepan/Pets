import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu.component';
import { FeatherModule } from 'angular-feather';
import { IconsModule } from '../../modules/icons.module';
import { ButtonModule } from '../button/button.module';
import { TranslateModule } from '@ngx-translate/core';
import { SearchFilterModule } from '../search-filter/search-filter.module';
import { PetsMenuModule } from '../pets-menu/pets-menu.module';

@NgModule({
  declarations: [MainMenuComponent],
  imports: [
    CommonModule,
    FeatherModule,
    IconsModule,
    ButtonModule,
    TranslateModule,
    SearchFilterModule,
    PetsMenuModule,
  ],
  exports: [MainMenuComponent],
})
export class MainMenuModule {}
