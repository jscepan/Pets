import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DefinitionsStoreService } from 'src/app/core/services/definitions-store.service';
import { LanguageService } from 'src/app/language.service';
import { EnumValueModel } from 'src/app/shared/enums/enum.model';
import { Language } from 'src/app/shared/enums/language.model';
import { PetsSweetAlertService } from 'src/app/shared/components/pets-sweet-alert/pets-sweet-alert.service';
import { DefinitionEntityModel } from 'src/app/shared/models/definition-entity.model';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'pets-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [PetsSweetAlertService],
})
export class DashboardComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  adsType: DefinitionEntityModel[] = [];
  selectedAdType?: DefinitionEntityModel;

  categories: EnumValueModel[] = [];
  subCategories: EnumValueModel[] = [];

  selectedLanguage: Language = Language.English;

  favoritesMenu: { icon: string; route: string; name: string }[] = [];

  constructor(
    private definitionsStoreService: DefinitionsStoreService,
    private router: Router,
    private languageService: LanguageService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.selectedLanguage = this.languageService.selectedLanguage;
    this.subs.sink = this.definitionsStoreService.definitions$.subscribe(
      (definitions) => {
        this.adsType = definitions?.adsType || [];
        this.selectAdType(definitions?.adsType[0]);
      }
    );
  }

  goTo(fav: { icon: string; route: string; name: string }): void {
    this.router.navigate(['ads']);
  }

  selectAdType(item?: DefinitionEntityModel): void {
    if (item) {
      this.selectedAdType = item;
      this.categories = this.definitionsStoreService.getCategoriesForAdTypes(
        item,
        this.languageService.selectedLanguage
      );
      this.subCategories = [];
    }
  }

  onAutocompleteChange(selectedObject: EnumValueModel): void {
    if (this.selectedAdType) {
      this.subCategories =
        this.definitionsStoreService.getSubcategoriesForCategory(
          this.selectedAdType,
          selectedObject.value,
          this.languageService.selectedLanguage
        );
    }
  }

  search(): void {
    this.router.navigate(['ads']);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
