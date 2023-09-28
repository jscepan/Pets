import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { takeUntil } from 'rxjs/operators';
import { PetsBasicAlertComponent } from './pets-basic-alert.component';

import {
  PetsBasicAlertEventsTypes,
  PetsBasicAlertI,
} from './pets-basic-alert.interface';

@Injectable()
export class PetsBasicAlertService {
  constructor(
    private snackBar: MatSnackBar,
    private basicAlertConfiguration: MatSnackBarConfig
  ) {}

  openBasicAlert(data: PetsBasicAlertI, closeAfter: number = 5000): void {
    const barRef: MatSnackBarRef<PetsBasicAlertComponent> =
      this.snackBar.openFromComponent(PetsBasicAlertComponent, {
        ...this.basicAlertConfiguration,
        data,
      });

    barRef.instance.eventOccurs
      .pipe(takeUntil(barRef.afterDismissed()))
      .subscribe((event: { eventName: string }) => {
        if (event.eventName === PetsBasicAlertEventsTypes.EXIT) {
          this.snackBar.dismiss();
        }
      });
    setTimeout(() => {
      this.snackBar.dismiss();
    }, closeAfter);
  }
}
