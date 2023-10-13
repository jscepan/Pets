import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CountryCreateEditComponent } from './country-create-edit.component';
import { CountryModel } from 'src/app/shared/models/country.model';

@Injectable()
export class CountryCreateEditPopupService {
  constructor(private _matDialog: MatDialog) {}

  openDialog(oid: string = ''): Observable<CountryModel> {
    const config: MatDialogConfig = new MatDialogConfig();

    config.data = {
      oid,
    };
    return this._matDialog
      .open(CountryCreateEditComponent, config)
      .afterClosed();
  }
}
