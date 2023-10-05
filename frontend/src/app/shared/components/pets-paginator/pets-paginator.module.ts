import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsPaginatorComponent } from './pets-paginator.component';
import { MatButtonModule } from '@angular/material/button';
import { PetsIconsProviderModule } from '../../modules/pets-icons.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [PetsPaginatorComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    PetsIconsProviderModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    TranslateModule,
    ReactiveFormsModule,
  ],
  exports: [PetsPaginatorComponent],
})
export class PetsPaginatorModule {}
