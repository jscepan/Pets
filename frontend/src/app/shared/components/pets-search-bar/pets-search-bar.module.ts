import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsSearchBarComponent } from './pets-search-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PetsMenuModule } from '../pets-menu/pets-menu.module';
import { PetsIconsProviderModule } from '../../modules/pets-icons.module';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [PetsSearchBarComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    PetsIconsProviderModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    PetsMenuModule,
    MatSelectModule,
    TranslateModule,
  ],
  exports: [PetsSearchBarComponent],
})
export class PetsSearchBarModule {}
