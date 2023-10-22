import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsPromotionCardComponent } from './pets-promotion-card.component';
import { MatButtonModule } from '@angular/material/button';
import { PetsIconsProviderModule } from '../../modules/pets-icons.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [PetsPromotionCardComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    PetsIconsProviderModule,
    TranslateModule,
  ],
  exports: [PetsPromotionCardComponent],
})
export class PetsPromotionCardModule {}
