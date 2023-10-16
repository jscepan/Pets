import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DefinitionsStoreService } from 'src/app/core/services/definitions-store.service';
import { LanguageService } from 'src/app/language.service';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';
import { TranslateService } from '@ngx-translate/core';
import { CityWebService } from 'src/app/web-services/city.web-service';
import { CityModel } from 'src/app/shared/models/city.model';
import { PetsSweetAlertService } from 'src/app/shared/components/pets-sweet-alert/pets-sweet-alert.service';
import { GlobalService } from 'src/app/shared/services/global.service';
import { CityCreateEditPopupService } from './city-create-edit-popup/city-create-edit-popup.service';
import {
  PetsSweetAlertI,
  PetsSweetAlertTypeEnum,
} from 'src/app/shared/components/pets-sweet-alert/pets-sweet-alert.interface';
import { MODE } from 'src/app/shared/components/pets-basic-alert/pets-basic-alert.interface';

@Component({
  selector: 'pets-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
  providers: [CityWebService, CityCreateEditPopupService],
})
export class CitiesComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  displayedColumns: string[] = ['value', 'zipCode', 'edit', 'delete'];
  cities: CityModel[] = [];

  constructor(
    private router: Router,
    private languageService: LanguageService,
    private translateService: TranslateService,
    private webService: CityWebService,
    private sweetAlertService: PetsSweetAlertService,
    private globalService: GlobalService,
    private createEditPopupService: CityCreateEditPopupService
  ) {}

  ngOnInit(): void {
    this.getAllCities();
  }

  getAllCities(): void {
    this.subs.sink = this.webService.getAllCities().subscribe((cities) => {
      this.cities = cities;
    });
  }

  createNew(): void {
    this.subs.sink = this.createEditPopupService
      .openDialog()
      .subscribe((city) => {
        if (city) {
          this.getAllCities();
        }
      });
  }

  editItem(element: CityModel): void {
    this.subs.sink = this.createEditPopupService
      .openDialog(element.oid)
      .subscribe((city) => {
        if (city) {
          this.getAllCities();
        }
      });
  }

  deleteItem(element: CityModel): void {
    this.subs.sink.$deleteIncome = this.sweetAlertService
      .getDataBackFromSweetAlert()
      .subscribe((data) => {
        if (data && data.confirmed) {
          this.subs.sink = this.webService
            .deleteEntity([element])
            .subscribe(() => {
              this.globalService.showBasicAlert(
                MODE.success,
                this.translateService.instant('cityDeleted'),
                this.translateService.instant('cityHaveBeenSuccessfullyDeleted')
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
      title: this.translateService.instant('deleteCity'),
      message: this.translateService.instant(
        'areYouSureYouWantToDeleteTheCity'
      ),
    };
    this.sweetAlertService.openMeSweetAlert(sweetAlertModel);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
