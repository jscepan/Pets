import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdViewRoutingModule } from './ad-view-routing.module';
import { AdViewComponent } from './ad-view.component';
import { TranslateModule } from '@ngx-translate/core';
import { PetsButtonModule } from 'src/app/shared/components/pets-button/pets-button.module';
import { PetsSweetAlertModule } from 'src/app/shared/components/pets-sweet-alert/pets-sweet-alert.module';
import { PetsIconsProviderModule } from 'src/app/shared/modules/pets-icons.module';
import { PetsCarouselModule } from 'src/app/shared/components/pets-carousel/pets-carousel.module';

@NgModule({
  declarations: [AdViewComponent],
  exports: [AdViewComponent],
  imports: [
    CommonModule,
    AdViewRoutingModule,
    TranslateModule,
    PetsButtonModule,
    PetsSweetAlertModule,
    PetsIconsProviderModule,
    PetsCarouselModule,
  ],
})
export class AdViewModule {}
