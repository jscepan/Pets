import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/language.service';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';
import { TranslateService } from '@ngx-translate/core';
import { CountryWebService } from 'src/app/web-services/country.web-service';
import { CountryModel } from 'src/app/shared/models/country.model';

@Component({
  selector: 'pets-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  providers: [CountryWebService],
})
export class CountryComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  displayedColumns: string[] = ['value'];
  countries: CountryModel[] = [];

  constructor(
    private router: Router,
    private languageService: LanguageService,
    private translateService: TranslateService,
    private webService: CountryWebService
  ) {}

  ngOnInit(): void {
    this.subs.sink = this.webService.getAllCities().subscribe((countries) => {
      this.countries = countries;
    });
  }

  editItem(element: CountryModel): void {
    // TODO
  }

  deleteItem(element: CountryModel): void {
    // TODO
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
