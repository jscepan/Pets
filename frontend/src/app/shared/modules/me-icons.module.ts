import { NgModule } from '@angular/core';
import { PetsIconsModule } from '../components/pets-icons/pets-icons.module';
import { allIcons } from '../components/pets-icons/icons/all-icons';

@NgModule({
  imports: [PetsIconsModule.pick(allIcons)],
  exports: [PetsIconsModule],
})
export class PetsIconsProviderModule {}
