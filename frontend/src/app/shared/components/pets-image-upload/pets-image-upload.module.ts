import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsImageUploadComponent } from './pets-image-upload.component';
import { MatButtonModule } from '@angular/material/button';
import { PetsIconsProviderModule } from '../../modules/pets-icons.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { FileSizePipe } from '../../pipes/file-size.pipe';
import { PetsButtonModule } from '../pets-button/pets-button.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PetsDragDropModule } from '../pets-drag-drop/pets-drag-drop.module';

@NgModule({
  declarations: [PetsImageUploadComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    PetsIconsProviderModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    FileSizePipe,
    PetsButtonModule,
    DragDropModule,
    PetsDragDropModule,
  ],
  exports: [PetsImageUploadComponent],
})
export class PetsImageUploadModule {}
