import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { SearchFilterModel } from '../../models/search.model';
import {
  FormArray,
  FormControl,
  FormGroup,
  UntypedFormArray,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';
import { EnumValueModel } from '../../enums/enum.model';
import { FilterModel } from '../../models/filter.model';
import { Observable, debounceTime } from 'rxjs';
import { DefinitionsStoreService } from 'src/app/core/services/definitions-store.service';
import { SubscriptionManager } from '../../services/subscription.manager';
import { LanguageService } from 'src/app/language.service';
import { enumToEnumKeyModel } from '../../utils';
import { SellType } from '../../enums/sell-type.model';
import { StoreService } from '../../services/store.service';
import { CityWebService } from 'src/app/web-services/city.web-service';
import { Currency } from '../../enums/currency.model';

@Component({
  selector: 'pets-filters',
  templateUrl: './pets-filters.component.html',
  styleUrls: ['./pets-filters.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CityWebService],
})
export class PetsFiltersComponent implements OnChanges, OnInit {
  public subs: SubscriptionManager = new SubscriptionManager();

  @Input() dataModel!: SearchFilterModel | null;

  @Output() changeEvent: EventEmitter<{ type: string; value: FilterModel }> =
    new EventEmitter();

  allSellTypes: EnumValueModel[] = enumToEnumKeyModel(SellType) || [];
  allCurrencyOptions: EnumValueModel[] = enumToEnumKeyModel(Currency) || [];
  allCities?: Observable<EnumValueModel[]>;

  adTypes: EnumValueModel[] = [];
  categories: EnumValueModel[] = [];
  subcategories: EnumValueModel[] = [];

  filterForm?: FormGroup;

  get subcategoriesFormArr(): UntypedFormArray {
    return this.filterForm?.get('subcategories') as UntypedFormArray;
  }

  constructor(
    private storeService: StoreService,
    private definitionsStoreService: DefinitionsStoreService,
    private languageService: LanguageService,
    private cityWebService: CityWebService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.setForm();
    // if(changes['selectedAdTypes'].currentValue!==changes['selectedAdTypes'].previousValue){
    //   this.filterForm?.get('adTypes')?.setValue(this.selectedAdTypes)
    //   this.populateCategoriesAndSubcategories();
    // }
  }

  ngOnInit(): void {
    this.adTypes = this.definitionsStoreService.getAdsTypes(
      this.languageService.selectedLanguage
    );
    this.allCities = this.storeService.getAllCitiesAsEnumValueModel(
      this.cityWebService
    );

    this.filterForm?.get('adTypes')?.valueChanges.subscribe((xxx) => {
      console.log(xxx);
      // this.populateCategoriesAndSubcategories();
      // this.addNew('categories')
    });
    this.filterForm?.get('categories')?.valueChanges.subscribe((xxx) => {
      // this.populateSubcategories();
      // this.addNew('subcategories')
    });

    this.filterForm?.valueChanges
      .pipe(debounceTime(1500))
      .subscribe((value) => {
        console.log(value);
        this.changeEvent?.emit({
          type: 'filterChange',
          value,
        });
      });
  }

  setForm(): void {
    this.filterForm = new FormGroup({
      cities: new FormArray([]), //this.dataModel?.adSearchCriteria?.cities ||
      priceFrom: new FormControl(this.dataModel?.adSearchCriteria?.priceFrom),
      priceTo: new FormControl(this.dataModel?.adSearchCriteria?.priceTo),
      priceCurrency: new FormControl(
        this.dataModel?.adSearchCriteria?.priceCurrency || Currency.eur
      ),
      sellTypes: new FormArray([]),
      //  new FormControl(
      //   this.dataModel?.adSearchCriteria?.sellTypes || []
      // ),
      adTypes: new FormControl(this.dataModel?.adSearchCriteria?.adTypes || []),
      categories: new FormControl(
        this.dataModel?.adSearchCriteria?.categories || []
      ),
      subcategories: new FormArray([]),
      //  new FormControl(
      //   this.dataModel?.adSearchCriteria?.subcategories || []
      // ),
      priceIsFixed: new FormControl(
        this.dataModel?.adSearchCriteria?.priceIsFixed
      ),
      freeOfCharge: new FormControl(
        this.dataModel?.adSearchCriteria?.freeOfCharge
      ),
    });
    this.addNew('city');
  }

  onCityChange(item: EnumValueModel): void {
    // this.changeEvent.emit({
    //   type: 'filterChange',
    //   value: this.filterForm?.value,
    // });
  }

  clearCityEvent(i: number): void {
    // this.secondFormGroup?.get('city')?.setValue('');
  }

  populateCategoriesAndSubcategories(): void {
    //
  }

  populateSubcategories(): void {
    //
  }

  clearValue(control: 'priceFrom' | 'priceTo'): void {
    this.filterForm?.get(control)?.setValue(null);
  }

  addNew(
    type:
      | 'city'
      | 'category'
      | 'price'
      | 'adTypes'
      | 'categories'
      | 'subcategories'
  ): void {
    switch (type) {
      case 'city':
        // console.log(this.filterForm?.controls['cities'] as UntypedFormArray);
        // (this.filterForm?.controls['cities'] as UntypedFormArray).;
        const citiesArray = this.filterForm?.get('cities') as FormArray;
        citiesArray.push(new FormControl('')); // Dodajte prazan FormControl
        break;
      case 'adTypes':
        // this.addAdType(new EnumValueModel());
        break;
      case 'categories':
        break;
      case 'subcategories':
        break;
    }
  }

  addSubcategoryType(subcategory?: EnumValueModel): void {
    this.subcategoriesFormArr.push(
      new UntypedFormGroup({
        value: new UntypedFormControl(subcategory?.value || '', []),
        displayName: new UntypedFormControl(subcategory?.displayName || '', []),
      })
    );
  }

  removeSubcategory(index: number): void {
    this.subcategoriesFormArr.removeAt(index);
  }
}
