import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/language.service';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';
import { TranslateService } from '@ngx-translate/core';
import { CountryWebService } from 'src/app/web-services/country.web-service';
import { CountryModel } from 'src/app/shared/models/country.model';
import { CountryCreateEditPopupService } from './country-create-edit-popup/country-create-edit-popup.service';
import { PetsSweetAlertService } from 'src/app/shared/components/pets-sweet-alert/pets-sweet-alert.service';
import { GlobalService } from 'src/app/shared/services/global.service';
import { MODE } from 'src/app/shared/components/pets-basic-alert/pets-basic-alert.interface';
import {
  PetsSweetAlertI,
  PetsSweetAlertTypeEnum,
} from 'src/app/shared/components/pets-sweet-alert/pets-sweet-alert.interface';

@Component({
  selector: 'pets-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  providers: [CountryWebService, CountryCreateEditPopupService],
})
export class CountryComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  displayedColumns: string[] = ['value', 'edit', 'delete'];
  countries: CountryModel[] = [];

  constructor(
    private router: Router,
    private languageService: LanguageService,
    private translateService: TranslateService,
    private webService: CountryWebService,
    private sweetAlertService: PetsSweetAlertService,
    private globalService: GlobalService,
    private createEditPopupService: CountryCreateEditPopupService
  ) {}

  ngOnInit(): void {
    this.getAllCities();
  }

  getAllCities(): void {
    this.subs.sink = this.webService.getAllCities().subscribe((countries) => {
      this.countries = countries;
    });
  }

  createNew(): void {
    this.subs.sink = this.createEditPopupService
      .openDialog()
      .subscribe((country) => {
        if (country) {
          this.getAllCities();
        }
      });
  }

  editItem(element: CountryModel): void {
    this.subs.sink = this.createEditPopupService
      .openDialog(element.oid)
      .subscribe((country) => {
        if (country) {
          this.getAllCities();
        }
      });
  }

  deleteItem(element: CountryModel): void {
    this.subs.sink.$deleteIncome = this.sweetAlertService
      .getDataBackFromSweetAlert()
      .subscribe((data) => {
        if (data && data.confirmed) {
          this.subs.sink = this.webService
            .deleteEntity([element])
            .subscribe(() => {
              this.globalService.showBasicAlert(
                MODE.success,
                this.translateService.instant('countryDeleted'),
                this.translateService.instant(
                  'countryHaveBeenSuccessfullyDeleted'
                )
              );
              this.getAllCities();
            });
        }
      });
    const sweetAlertModel: PetsSweetAlertI = {
      mode: 'warning',
      icon: 'alert-triangle',
      type: {
        name: PetsSweetAlertTypeEnum.submit,
        buttons: {
          submit: this.translateService.instant('delete'),
          cancel: this.translateService.instant('cancel'),
        },
      },
      title: this.translateService.instant('deleteCountry'),
      message: this.translateService.instant(
        'areYouSureYouWantToDeleteTheCountry'
      ),
    };
    this.sweetAlertService.openMeSweetAlert(sweetAlertModel);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
