import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DefinitionsStoreService } from 'src/app/core/services/definitions-store.service';
import { LanguageService } from 'src/app/language.service';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';
import { TranslateService } from '@ngx-translate/core';
import { CityWebService } from 'src/app/web-services/city.web-service';
import { CityModel } from 'src/app/shared/models/city.model';

@Component({
  selector: 'pets-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
  providers: [CityWebService],
})
export class CitiesComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  displayedColumns: string[] = ['value', 'zipCode', 'edit', 'delete'];
  cities: CityModel[] = [];

  constructor(
    private router: Router,
    private languageService: LanguageService,
    private translateService: TranslateService,
    private webService: CityWebService
  ) {}

  ngOnInit(): void {
    this.subs.sink = this.webService.getAllCities().subscribe((cities) => {
      this.cities = cities;
    });
  }

  editItem(element: CityModel): void {
    // TODO
  }

  deleteItem(element: CityModel): void {
    // TODO
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
