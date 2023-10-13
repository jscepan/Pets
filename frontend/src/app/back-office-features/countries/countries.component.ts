import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/language.service';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';
import { TranslateService } from '@ngx-translate/core';
import { CountryWebService } from 'src/app/web-services/country.web-service';
import { CountryModel } from 'src/app/shared/models/country.model';
import { CountryCreateEditPopupService } from './country-create-edit-popup/country-create-edit-popup.service';

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
    private createEditPopupService: CountryCreateEditPopupService
  ) {}

  ngOnInit(): void {
    this.subs.sink = this.webService.getAllCities().subscribe((countries) => {
      this.countries = countries;
    });
  }

  createNew(): void {
    // TODO
    this.subs.sink = this.createEditPopupService
      .openDialog()
      .subscribe((country) => {
        console.log(country);
      });
  }

  editItem(element: CountryModel): void {
    this.subs.sink = this.createEditPopupService
      .openDialog(element.oid)
      .subscribe((country) => {
        console.log(country);
      });
  }

  deleteItem(element: CountryModel): void {
    // TODO
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
