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
import { FormControl, FormGroup } from '@angular/forms';
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
  @Input() selectedAdTypes: EnumValueModel[] | undefined = [];
  @Input() selectedCategories: EnumValueModel[] | undefined = [];
  @Input() selectedSubcategories: EnumValueModel[] | undefined = [];

  @Output() changeEvent: EventEmitter<{ type: string; value: FilterModel }> =
    new EventEmitter();

  allSellTypes: EnumValueModel[] = enumToEnumKeyModel(SellType) || [];
  allCurrencyOptions: EnumValueModel[] = enumToEnumKeyModel(Currency) || [];
  allCities?: Observable<EnumValueModel[]>;

  adTypes: EnumValueModel[] = [];
  categories: EnumValueModel[] = [];
  subcategories: EnumValueModel[] = [];

  filterForm?: FormGroup;

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

    // this.setForm();

    this.filterForm?.get('adTypes')?.valueChanges.subscribe((xxx) => {
      this.populateCategoriesAndSubcategories();
    });
    this.filterForm?.get('categories')?.valueChanges.subscribe((xxx) => {
      this.populateSubcategories();
    });

    this.filterForm?.valueChanges.pipe(debounceTime(1500)).subscribe(() => {
      this.changeEvent?.emit({
        type: 'filterChange',
        value: this.filterForm?.value,
      });
    });
  }

  setForm(): void {
    this.filterForm = new FormGroup({
      cities: new FormControl(this.dataModel?.adSearchCriteria?.cities),
      priceFrom: new FormControl(this.dataModel?.adSearchCriteria?.priceFrom),
      priceTo: new FormControl(this.dataModel?.adSearchCriteria?.priceTo),
      priceCurrency: new FormControl(
        this.dataModel?.adSearchCriteria?.priceCurrency
      ),
      sellTypes: new FormControl([]),
      adTypes: new FormControl(this.selectedAdTypes),
      categories: new FormControl(this.dataModel?.adSearchCriteria?.categories),
      subcategories: new FormControl(
        this.dataModel?.adSearchCriteria?.subcategories
      ),
      priceIsFixed: new FormControl(
        this.dataModel?.adSearchCriteria?.priceIsFixed
      ),
      freeOfCharge: new FormControl(
        this.dataModel?.adSearchCriteria?.freeOfCharge
      ),
    });
  }

  onCityChange(item: EnumValueModel): void {
    this.changeEvent.emit({
      type: 'filterChange',
      value: this.filterForm?.value,
    });
  }

  clearCityEvent(): void {
    // this.secondFormGroup?.get('city')?.setValue('');
  }

  populateCategoriesAndSubcategories(): void {
    //
    console.log(this.selectedAdTypes);
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
        break;
    }
  }
}
