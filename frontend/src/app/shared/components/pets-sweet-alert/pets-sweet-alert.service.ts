import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { Observable, Subject } from 'rxjs';

import { PetsSweetAlertI } from './pets-sweet-alert.interface';
import { PetsSweetAlertComponent } from './pets-sweet-alert.component';

@Injectable()
export class PetsSweetAlertService {
  dataToReturn: Subject<PetsSweetAlertI> = new Subject<PetsSweetAlertI>();

  constructor(private dialog: MatDialog) {}

  openMeSweetAlert(
    data: PetsSweetAlertI
  ): MatDialogRef<PetsSweetAlertComponent> {
    const dialogRef = this.dialog.open(PetsSweetAlertComponent, {
      data,
      panelClass: 'sweet-alert-dialog',
    });

    dialogRef.componentInstance.eventOccurs.subscribe(
      (event: { eventName: string; payload: PetsSweetAlertI }) => {
        if (
          event.eventName === 'submit' ||
          event.eventName === 'confirm' ||
          event.eventName === 'ok'
        ) {
          data.confirmed = true;
          dialogRef.close(data);
        } else if (event.eventName === 'cancel') {
          data.confirmed = false;
          dialogRef.close(data);
        }
      }
    );

    dialogRef.afterClosed().subscribe((alertData: PetsSweetAlertI) => {
      this.dataToReturn.next(alertData);
    });

    return dialogRef;
  }

  getDataBackFromSweetAlert(): Observable<PetsSweetAlertI> {
    return this.dataToReturn.asObservable();
  }
}
