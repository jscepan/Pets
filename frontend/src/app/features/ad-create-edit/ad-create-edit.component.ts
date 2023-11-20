import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Editor, Toolbar } from 'ngx-editor';
import { Observable } from 'rxjs';
import { AuthStoreService } from 'src/app/core/services/auth-store.service';
import { DefinitionsStoreService } from 'src/app/core/services/definitions-store.service';
import { LanguageService } from 'src/app/language.service';
import { PetsImageUploadComponent } from 'src/app/shared/components/pets-image-upload/pets-image-upload.component';
import { Currency } from 'src/app/shared/enums/currency.model';
import { EnumValueModel } from 'src/app/shared/enums/enum.model';
import { SellType } from 'src/app/shared/enums/sell-type.model';
import { AdModel } from 'src/app/shared/models/ad.model';
import { CityModel } from 'src/app/shared/models/city.model';
import { DefinitionEntityModel } from 'src/app/shared/models/definition-entity.model';
import { DefinitionModel } from 'src/app/shared/models/definitions.model';
import { PromotionModel } from 'src/app/shared/models/promotion.model';
import { StoreService } from 'src/app/shared/services/store.service';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';
import { AdWebService } from 'src/app/web-services/ad.web-service';
import { CityWebService } from 'src/app/web-services/city.web-service';
import { PromotionWebService } from 'src/app/web-services/promotion.web-service';

@Component({
  selector: 'pets-ad-create-edit',
  templateUrl: './ad-create-edit.component.html',
  styleUrls: ['./ad-create-edit.component.scss'],
  providers: [AdWebService, PromotionWebService, CityWebService],
})
export class AdCreateEditComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  @ViewChild('stepper') private myStepper!: MatStepper;

  // Description editor
  editor: Editor = new Editor();
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

  firstFormGroup?: FormGroup;
  secondFormGroup?: FormGroup;
  thirdFormGroup?: FormGroup;

  definitions?: DefinitionModel | null;
  adsType: EnumValueModel[] = [];
  categories: EnumValueModel[] | undefined = [];
  subCategories: EnumValueModel[] | undefined = [];

  citiesEnumValues?: Observable<EnumValueModel[]>;
  selectedCity?: CityModel;

  promotions: PromotionModel[] = [];

  selectedAdType?: DefinitionEntityModel;
  selectedCategories?: DefinitionEntityModel;
  selectedSubCategories?: DefinitionEntityModel;

  sellTypeOptions = SellType;
  priceCurrencyOptions = Currency;

  @ViewChild(PetsImageUploadComponent)
  private petsImageUploadComponent?: PetsImageUploadComponent;

  constructor(
    private authStoreService: AuthStoreService,
    private definitionsStoreService: DefinitionsStoreService,
    private router: Router,
    private languageService: LanguageService,
    private _formBuilder: FormBuilder,
    private adWebService: AdWebService,
    private promotionWebService: PromotionWebService,
    private cityWebService: CityWebService,
    private storeService: StoreService,
    private translateService: TranslateService
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
      }
    );
    this.citiesEnumValues = this.storeService.getAllCitiesAsEnumValueModel(
      this.cityWebService
    );
    this.subs.sink = this.promotionWebService
      .getAllPromotions()
      .subscribe((promotions) => {
        this.promotions = promotions;
      });
    this.initializeForm();
  }

  initializeForm(): void {
    const city = this.storeService.getCityByOid(
      this.authStoreService.user?.city?.oid
    );
    this.firstFormGroup = this._formBuilder.group({
      sellType: [SellType.SELL, [Validators.required]],
      adType: ['', Validators.required],
      category: ['', Validators.required],
      subcategory: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      images: [[]],
      title: ['', Validators.required],
      description: [''],
      price: [0],
      priceCurrency: ['', [Validators.required]],
      priceIsFixed: [false],
      freeOfCharge: [false],
      contactName: [
        this.authStoreService.user?.displayName || '',
        [Validators.required],
      ],
      contactPhone: [
        this.authStoreService.user?.phoneNumber || '',
        [Validators.required],
      ],
      city: [city || '', [Validators.required]],
    });
    this.thirdFormGroup = this._formBuilder.group({
      promotion: [
        this.promotions ? this.promotions[0] : '',
        [Validators.required],
      ],
    });
  }

  createAd(): void {
    const images = this.petsImageUploadComponent?.images;

    const adData: AdModel = <AdModel>{
      oid: '',
      ...this.firstFormGroup?.value,
      ...this.secondFormGroup?.value,
      ...this.thirdFormGroup?.value,
      images: images ? images : [],
      city: this.selectedCity,
      user: this.authStoreService.user,
    };
    this.subs.sink = this.adWebService.createEntity(adData).subscribe((ad) => {
      console.log(ad);
    });
  }

  onAdsTypeChange(item: any): void {
    const types = this.definitions?.adsType.filter(
      (t) => t.value === item.value
    )[0];
    this.selectedAdType = types;
    this.firstFormGroup
      ?.get('adType')
      ?.setValue(this.selectedAdType?.value || '');

    this.categories = types?.childrens.map((t) => {
      return {
        value: t.value,
        displayName: t.displayValue[this.languageService.selectedLanguage],
      };
    });
    this.subCategories = [];
  }

  oncategoriesChange(item: any): void {
    const cat = this.selectedAdType?.childrens.filter(
      (t) => t.value === item.value
    )[0];
    this.selectedCategories = cat;
    this.firstFormGroup
      ?.get('category')
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
      ?.get('subcategory')
      ?.setValue(this.selectedSubCategories?.value || '');
  }

  onCityChange(item: EnumValueModel): void {
    this.selectedCity = this.storeService.getCityByEnumValue(item.value);
    this.secondFormGroup?.get('city')?.setValue(this.selectedCity);
  }

  clearCityEvent(): void {
    this.secondFormGroup?.get('city')?.setValue('');
  }

  nextStep(): void {
    this.myStepper.next();
  }

  previousStep(): void {
    this.myStepper.previous();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
