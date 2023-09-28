import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DefinitionsStoreService } from 'src/app/core/services/definitions-store.service';
import { LanguageService } from 'src/app/language.service';
import { EnumValueModel } from 'src/app/shared/enums/enum.model';
import { Language } from 'src/app/shared/enums/language.model';
import { DefinitionEntityModel } from 'src/app/shared/models/definition-entity.model';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';

@Component({
  selector: 'pets-ad-create-edit',
  templateUrl: './ad-create-edit.component.html',
  styleUrls: ['./ad-create-edit.component.scss'],
  providers: [],
})
export class AdCreateEditComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  adsType: DefinitionEntityModel[] = [];
  selectedAdType?: DefinitionEntityModel;

  categories: EnumValueModel[] = [];
  subCategories: EnumValueModel[] = [];

  selectedLanguage: Language = Language.English;

  constructor(
    private definitionsStoreService: DefinitionsStoreService,
    private router: Router,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.selectedLanguage = this.languageService.selectedLanguage;
    this.subs.sink = this.definitionsStoreService.definitions$.subscribe(
      (definitions) => {
        this.adsType = definitions?.adsType || [];
      }
    );
  }

  selectAdType(item: DefinitionEntityModel): void {
    this.selectedAdType = item;
    this.categories = this.selectedAdType.childrens.map((t) => {
      return {
        value: t.value,
        displayName: t.displayValue[this.selectedLanguage],
      };
    });
  }

  onAutocompleteChange(selectedObject: EnumValueModel) {
    // console.log('selectedObject');
    // console.log(selectedObject);
    // console.log('this.selectedAdType');
    const adTypes = this.selectedAdType?.childrens.filter(
      (x) => x.value === selectedObject.value
    );
    const type = adTypes ? adTypes[0] : undefined;
    // console.log('type');
    // console.log(type);
    if (type && type.childrens) {
      this.subCategories = type.childrens.map((t) => {
        return {
          value: t.value,
          displayName: t.displayValue[this.selectedLanguage],
        };
      });
    } else {
      this.subCategories = [];
    }
  }

  search(): void {
    this.router.navigate(['ads']);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
