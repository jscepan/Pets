import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityCreateEditPopupComponent } from './city-create-edit.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { PetsButtonModule } from 'src/app/shared/components/pets-button/pets-button.module';
import { TranslateWithCapitalLettersPipe } from 'src/app/shared/pipes/translate-capital-letters.pipe';

@NgModule({
  declarations: [CityCreateEditPopupComponent],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    PetsButtonModule,
    TranslateWithCapitalLettersPipe,
  ],
})
export class CityCreateEditModule {}
