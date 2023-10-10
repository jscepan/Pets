import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsDragDropComponent } from './pets-drag-drop.component';
import { MatButtonModule } from '@angular/material/button';
import { PetsIconsProviderModule } from '../../modules/pets-icons.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PetsButtonModule } from '../pets-button/pets-button.module';

@NgModule({
  declarations: [PetsDragDropComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    PetsIconsProviderModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    DragDropModule,
    PetsButtonModule,
  ],
  exports: [PetsDragDropComponent],
})
export class PetsDragDropModule {}
