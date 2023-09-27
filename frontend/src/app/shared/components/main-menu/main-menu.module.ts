import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu.component';
import { FeatherModule } from 'angular-feather';
import { IconsModule } from '../../modules/icons.module';
import { ButtonModule } from '../button/button.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [MainMenuComponent],
  imports: [
    CommonModule,
    FeatherModule,
    IconsModule,
    ButtonModule,
    TranslateModule,
  ],
  exports: [MainMenuComponent],
})
export class MainMenuModule {}
