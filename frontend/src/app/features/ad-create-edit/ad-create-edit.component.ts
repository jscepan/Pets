import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Editor, Toolbar } from 'ngx-editor';
import { AuthStoreService } from 'src/app/core/services/auth-store.service';
import { DefinitionsStoreService } from 'src/app/core/services/definitions-store.service';
import { LanguageService } from 'src/app/language.service';
import { CURRENCY, SELL_TYPE } from 'src/app/shared/constants';
import { EnumValueModel } from 'src/app/shared/enums/enum.model';
import { Language } from 'src/app/shared/enums/language.model';
import { SellType } from 'src/app/shared/enums/sell-type.model';
import { AdModel } from 'src/app/shared/models/ad.model';
import { DefinitionEntityModel } from 'src/app/shared/models/definition-entity.model';
import { DefinitionModel } from 'src/app/shared/models/definitions.model';
import { SearchFilterModel } from 'src/app/shared/models/search.model';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';
import { AdWebService } from 'src/app/web-services/ad.web-service';
import { PromotionWebService } from 'src/app/web-services/promotion.web-service';

@Component({
  selector: 'pets-ad-create-edit',
  templateUrl: './ad-create-edit.component.html',
  styleUrls: ['./ad-create-edit.component.scss'],
  providers: [AdWebService, PromotionWebService],
})
export class AdCreateEditComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  // Description editor
  editor: Editor = new Editor();
  html = '';
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    [], //['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  firstFormGroup = this._formBuilder.group({
    adSellType: [SellType.SELL],
    adType: ['', Validators.required],
    category: ['', Validators.required],
    subcategory: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    title: ['', Validators.required],
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

  definitions?: DefinitionModel | null;
  adsType: EnumValueModel[] = [];
  categories: EnumValueModel[] | undefined = [];
  subCategories: EnumValueModel[] | undefined = [];

  cities: EnumValueModel[] | undefined = [];

  selectedAdType?: DefinitionEntityModel;
  selectedCategories?: DefinitionEntityModel;
  selectedSubCategories?: DefinitionEntityModel;
  selectedCity?: DefinitionEntityModel;

  priceCurrencyOptions: EnumValueModel[] = CURRENCY;
  sellTypeOptions: EnumValueModel[] = SELL_TYPE;

  constructor(
    private authStoreService: AuthStoreService,
    private definitionsStoreService: DefinitionsStoreService,
    private router: Router,
    private languageService: LanguageService,
    private _formBuilder: FormBuilder,
    private adWebService: AdWebService,
    private promotionWebService: PromotionWebService
  ) {}

  ngOnInit(): void {
    // if (!this.authStoreService.user) {
    //   this.router.navigate(['/auth/login']);
    // }
    this.subs.sink = this.definitionsStoreService.definitions$.subscribe(
      (definitions) => {
        this.definitions = definitions;
        const types = definitions?.adsType.map((d) => {
          return {
            value: d.value,
            displayName: d.displayValue[this.languageService.selectedLanguage],
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
            displayName: c.displayValue[this.languageService.selectedLanguage],
          };
        });
      }
    );
    this.subs.sink = this.promotionWebService
      .getAllPromotions()
      .subscribe((promotions) => {
        console.log('promotions');
        console.log(promotions);
        // this.promotions = promotions;
      });
  }

  createAd(): void {
    const prom =
      '{"oid": "promotion::1","id": 1,"type": "tip_neki_tamo","title": "Standardna vidljivost","subtitle": "","description": "Objavite vas oglas potpuno besplatno","services": "Objava oglasa u trajanju od 30 dana","price": 0.0,"priceCurrency": "RSD","freeOfCharge": "1","inactive": false,"createdOn": "2023-09-29T23:09:41.000+00:00"  }';
    const adData: AdModel = <AdModel>{
      oid: '',
      adType: this.selectedAdType?.value,
      category: this.selectedCategories?.value,
      subcategory: this.selectedSubCategories?.value,
      ...this.secondFormGroup.value,
      // ...this.thirdFormGroup.value,
      promotion: JSON.parse(prom),
    };
    adData.city = this.selectedCity?.value;
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
        displayName: t.displayValue[this.languageService.selectedLanguage],
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
        displayName: t.displayValue[this.languageService.selectedLanguage],
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
