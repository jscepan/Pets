import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CityCreateEditPopupComponent } from './city-create-edit.component';
import { CountryModel } from 'src/app/shared/models/country.model';

@Injectable()
export class CityCreateEditPopupService {
  constructor(private _matDialog: MatDialog) {}

  openDialog(oid: string = ''): Observable<CountryModel> {
    const config: MatDialogConfig = new MatDialogConfig();

    config.data = {
      oid,
    };
    return this._matDialog
      .open(CityCreateEditPopupComponent, config)
      .afterClosed();
  }
}
