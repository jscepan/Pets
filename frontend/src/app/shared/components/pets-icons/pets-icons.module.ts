import { NgModule, ModuleWithProviders } from '@angular/core';
import { PetsIconsComponent } from './pets-icons.component';
import { Icons } from './pets-icon.provider';

@NgModule({
  declarations: [PetsIconsComponent],
  exports: [PetsIconsComponent],
})
export class PetsIconsModule {
  static pick(icons: {
    [key: string]: string;
  }): ModuleWithProviders<PetsIconsModule> {
    return {
      ngModule: PetsIconsModule,
      providers: [{ provide: Icons, multi: true, useValue: icons }],
    };
  }
}
