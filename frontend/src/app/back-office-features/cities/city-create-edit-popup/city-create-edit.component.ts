import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { MODE } from 'src/app/shared/components/pets-basic-alert/pets-basic-alert.interface';
import { CityModel } from 'src/app/shared/models/city.model';
import { CountryModel } from 'src/app/shared/models/country.model';
import { GlobalService } from 'src/app/shared/services/global.service';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';
import { CityWebService } from 'src/app/web-services/city.web-service';
import { CountryWebService } from 'src/app/web-services/country.web-service';

export interface DialogData {
  oid: string;
}

@Component({
  selector: 'app-city-create-edit',
  templateUrl: './city-create-edit.component.html',
  styleUrls: ['./city-create-edit.component.scss'],
  providers: [CityWebService, CountryWebService],
})
export class CityCreateEditPopupComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  dataModelOID!: string;
  formGroup!: UntypedFormGroup;
  isEdit: boolean = false;

  selectedCountry?: CountryModel;
  countries: CountryModel[] = [];

  constructor(
    private dialogRef: MatDialogRef<CityCreateEditPopupComponent>,
    private globalService: GlobalService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private webService: CityWebService,
    private countryWebService: CountryWebService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.dataModelOID = this.data.oid;
    this.isEdit = !!this.dataModelOID;

    this.subs.sink = this.countryWebService
      .getAllCountries()
      .subscribe((countries) => {
        this.countries = countries;
        if (this.isEdit) {
          this.subs.sink = this.webService
            .getEntityByOid(this.dataModelOID)
            .subscribe((data) => {
              this.initializeForm(data);
            });
        } else {
          this.initializeForm();
        }
      });
  }

  initializeForm(dataModel?: CityModel): void {
    this.formGroup = new UntypedFormGroup({
      value: new UntypedFormControl(dataModel?.value || '', [
        Validators.required,
      ]),
      zipCode: new UntypedFormControl(dataModel?.zipCode || '', [
        Validators.required,
      ]),
      country: new UntypedFormControl(dataModel?.country || '', [
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
              this.translateService.instant('cityIsSuccessfullyUpdated')
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
            this.translateService.instant('newcityIsSuccessfullyCreated')
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
