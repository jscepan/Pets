import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { PetsBasicAlertModule } from '../shared/components/pets-basic-alert/pets-basic-alert.module';
import { throwIfAlreadyLoaded } from './guards/module-import.guard';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { PetsSweetAlertModule } from '../shared/components/pets-sweet-alert/pets-sweet-alert.module';
import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PetsBasicAlertModule,
    PetsSweetAlertModule,
    MatMenuModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'outline',
        floatLabel: 'auto',
      },
    },
    {
      provide: MatSnackBarConfig,
      useValue: {
        duration: 7000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      },
    },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded<CoreModule>(parentModule, 'CoreModule');
  }
}
