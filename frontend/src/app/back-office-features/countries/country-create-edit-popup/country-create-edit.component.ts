import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { MODE } from 'src/app/shared/components/pets-basic-alert/pets-basic-alert.interface';
import { CountryModel } from 'src/app/shared/models/country.model';
import { GlobalService } from 'src/app/shared/services/global.service';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';
import { CountryWebService } from 'src/app/web-services/country.web-service';

export interface DialogData {
  oid: string;
}

@Component({
  selector: 'app-country-create-edit',
  templateUrl: './country-create-edit.component.html',
  styleUrls: ['./country-create-edit.component.scss'],
  providers: [CountryWebService],
})
export class CountryCreateEditComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  dataModelOID!: string;
  formGroup!: UntypedFormGroup;
  isEdit: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<CountryCreateEditComponent>,
    private globalService: GlobalService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private webService: CountryWebService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.dataModelOID = this.data.oid;
    this.isEdit = !!this.dataModelOID;

    if (this.isEdit) {
      this.subs.sink = this.webService
        .getEntityByOid(this.dataModelOID)
        .subscribe((data) => {
          this.initializeForm(data);
        });
    } else {
      this.initializeForm();
    }
  }

  initializeForm(dataModel?: CountryModel): void {
    this.formGroup = new UntypedFormGroup({
      date: new UntypedFormControl(dataModel?.value || '', [
        Validators.required,
      ]),
    });
  }

  handleSubmitButton(): void {
    const newEntity = this.formGroup.value;

    if (this.isEdit) {
      this.webService
        .updateEntity(this.dataModelOID, newEntity)
        .subscribe((response) => {
          if (response) {
            this.globalService.showBasicAlert(
              MODE.success,
              this.translateService.instant('successfully'),
              this.translateService.instant('incomeIsSuccessfullyUpdated')
            );
            this.dialogRef.close(newEntity);
          }
        });
    } else {
      this.webService.createEntity(newEntity).subscribe((response) => {
        if (response) {
          this.globalService.showBasicAlert(
            MODE.success,
            this.translateService.instant('successfully'),
            this.translateService.instant('newIncomeIsSuccessfullyCreated')
          );
          this.dialogRef.close(newEntity);
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
