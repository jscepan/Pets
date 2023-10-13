import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryCreateEditComponent } from './country-create-edit.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { PetsButtonModule } from 'src/app/shared/components/pets-button/pets-button.module';

@NgModule({
  declarations: [CountryCreateEditComponent],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    PetsButtonModule,
  ],
})
export class CountryCreateEditModule {}
