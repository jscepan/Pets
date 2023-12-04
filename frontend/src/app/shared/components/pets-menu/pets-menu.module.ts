import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsMenuComponent } from './pets-menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { PetsIconsProviderModule } from '../../modules/pets-icons.module';
import { TranslateModule } from '@ngx-translate/core';
import { PetsUserInitialsModule } from '../pets-user-initials/pets-user-initials.module';

@NgModule({
  declarations: [PetsMenuComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    PetsIconsProviderModule,
    TranslateModule,
    PetsUserInitialsModule,
  ],
  exports: [PetsMenuComponent],
})
export class PetsMenuModule {}
