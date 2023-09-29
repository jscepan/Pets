import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DefinitionsStoreService } from 'src/app/core/services/definitions-store.service';
import { LanguageService } from 'src/app/language.service';
import { EnumValueModel } from 'src/app/shared/enums/enum.model';
import { Language } from 'src/app/shared/enums/language.model';
import { SellType } from 'src/app/shared/enums/sell-type.model';
import { AdModel } from 'src/app/shared/models/ad.model';
import { DefinitionEntityModel } from 'src/app/shared/models/definition-entity.model';
import { DefinitionModel } from 'src/app/shared/models/definitions.model';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';
import { AdWebService } from 'src/app/web-services/ad.web-service';

@Component({
  selector: 'pets-ad-create-edit',
  templateUrl: './ad-create-edit.component.html',
  styleUrls: ['./ad-create-edit.component.scss'],
  providers: [AdWebService],
})
export class AdCreateEditComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  firstFormGroup = this._formBuilder.group({
    adType: ['', Validators.required],
    category: ['', Validators.required],
    subcategory: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    title: ['', Validators.required],
    adSellType: [SellType.SELL],
    price: [0],
    priceCurrency: [''],
    priceIsFixed: false,
    freeOfCharge: false,
    description: [''],
    images: [],
    city: [''],
    contactName: [''],
    contactPhone: [''],
  });
  thirdFormGroup = this._formBuilder.group({
    promotion: [''],
  });
  selectedLanguage: Language = Language.English;

  definitions?: DefinitionModel | null;
  adsType: EnumValueModel[] = [];
  categories: EnumValueModel[] | undefined = [];
  subCategories: EnumValueModel[] | undefined = [];

  cities: EnumValueModel[] | undefined = [];

  selectedAdType?: DefinitionEntityModel;
  selectedCategories?: DefinitionEntityModel;
  selectedSubCategories?: DefinitionEntityModel;
  selectedCity?: DefinitionEntityModel;

  constructor(
    private definitionsStoreService: DefinitionsStoreService,
    private router: Router,
    private languageService: LanguageService,
    private _formBuilder: FormBuilder,
    private adWebService: AdWebService
  ) {}

  ngOnInit(): void {
    this.subs.sink = this.definitionsStoreService.definitions$.subscribe(
      (definitions) => {
        this.definitions = definitions;
        const types = definitions?.adsType.map((d) => {
          return {
            value: d.value,
            displayName: d.displayValue[this.selectedLanguage],
          };
        });
        if (types) {
          this.adsType = types;
        }
        const country = definitions?.countries.filter(
          (c) => c.value === 'serbia'
        )[0];
        this.cities = country?.childrens.map((c) => {
          return {
            value: c.value,
            displayName: c.displayValue[this.selectedLanguage],
          };
        });
      }
    );
  }

  createAd(): void {
    const adData: AdModel = <AdModel>{
      oid: '',
      adType: this.selectedAdType?.value,
      category: this.selectedCategories?.value,
      subcategory: this.selectedSubCategories?.value,
      ...this.secondFormGroup.value,
      ...this.thirdFormGroup.value,
    };
    this.subs.sink = this.adWebService.createEntity(adData).subscribe((ad) => {
      console.log('------------------');
      console.log(ad);
    });
  }

  onAdsTypeChange(item: any): void {
    const types = this.definitions?.adsType.filter(
      (t) => t.value === item.value
    )[0];
    this.selectedAdType = types;
    this.firstFormGroup
      .get('adType')
      ?.setValue(this.selectedAdType?.value || '');
    this.categories = types?.childrens.map((t) => {
      return {
        value: t.value,
        displayName: t.displayValue[this.selectedLanguage],
      };
    });
  }

  oncategoriesChange(item: any): void {
    const cat = this.selectedAdType?.childrens.filter(
      (t) => t.value === item.value
    )[0];
    this.selectedCategories = cat;
    this.firstFormGroup
      .get('category')
      ?.setValue(this.selectedCategories?.value || '');
    this.subCategories = cat?.childrens.map((t) => {
      return {
        value: t.value,
        displayName: t.displayValue[this.selectedLanguage],
      };
    });
  }

  onSubcategoriesChange(item: any): void {
    const cat = this.selectedCategories?.childrens.filter(
      (t) => t.value === item.value
    )[0];
    this.selectedSubCategories = cat;
    this.firstFormGroup
      .get('subcategory')
      ?.setValue(this.selectedSubCategories?.value || '');
  }

  onCityChange(item: any): void {}

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
