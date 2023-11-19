import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { SearchFilterModel } from '../../models/search.model';
import { FormControl, FormGroup } from '@angular/forms';
import { EnumValueModel } from '../../enums/enum.model';
import { FilterModel } from '../../models/filter.model';
import { Observable, debounceTime } from 'rxjs';
import { DefinitionsStoreService } from 'src/app/core/services/definitions-store.service';
import { SubscriptionManager } from '../../services/subscription.manager';
import { LanguageService } from 'src/app/language.service';
import { enumToEnumValueModel } from '../../utils';
import { SellType } from '../../enums/sell-type.model';
import { StoreService } from '../../services/store.service';
import { CityWebService } from 'src/app/web-services/city.web-service';

@Component({
  selector: 'pets-filters',
  templateUrl: './pets-filters.component.html',
  styleUrls: ['./pets-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CityWebService],
})
export class PetsFiltersComponent implements OnInit {
  public subs: SubscriptionManager = new SubscriptionManager();

  @Input() dataModel!: SearchFilterModel | null;

  @Output() changeEvent: EventEmitter<FilterModel> = new EventEmitter();

  adTypes: EnumValueModel[] = [];
  selectedAdTypes: EnumValueModel[] = [];
  sellTypes: EnumValueModel[] = [];
  cities?: Observable<EnumValueModel[]>;
  categories: EnumValueModel[] = [];
  subcategories: EnumValueModel[] = [];
  filterForm?: FormGroup;

  constructor(
    private storeService: StoreService,
    private definitionsStoreService: DefinitionsStoreService,
    private languageService: LanguageService,
    private cityWebService: CityWebService
  ) {}

  ngOnInit(): void {
    this.sellTypes = enumToEnumValueModel(SellType);
    this.adTypes = this.definitionsStoreService.getAdsTypes(
      this.languageService.selectedLanguage
    );
    this.cities = this.storeService.getAllCitiesAsEnumValueModel(
      this.cityWebService
    );

    this.filterForm = new FormGroup({
      cities: new FormControl(this.dataModel?.adSearchCriteria?.cities),
      priceFrom: new FormControl(this.dataModel?.adSearchCriteria?.priceFrom),
      priceTo: new FormControl(this.dataModel?.adSearchCriteria?.priceTo),
      sellTypes: new FormControl(this.sellTypes[0]),
      adTypes: new FormControl(this.adTypes),
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

    this.filterForm?.get('adTypes')?.valueChanges.subscribe((xxx) => {
      console.log(xxx);
      this.populateCategoriesAndSubcategories('adType');
    });
    this.filterForm?.get('categories')?.valueChanges.subscribe((xxx) => {
      console.log(xxx);
      this.populateCategoriesAndSubcategories('categories');
    });
    this.filterForm?.get('subcategories')?.valueChanges.subscribe((xxx) => {
      console.log(xxx);
      this.populateCategoriesAndSubcategories('subcategories');
    });

    this.filterForm.valueChanges.pipe(debounceTime(1500)).subscribe(() => {
      this.changeEvent.emit(this.filterForm?.value);
    });
  }

  onCityChange(item: EnumValueModel): void {
    // this.selectedCity = this.cities?.filter((c) => c.value === item.value)[0];
    // this.secondFormGroup?.get('city')?.setValue(this.selectedCity);
  }

  clearCityEvent(): void {
    // this.secondFormGroup?.get('city')?.setValue('');
  }

  populateCategoriesAndSubcategories(
    changeOf: 'adType' | 'categories' | 'subcategories'
  ): void {
    //
  }

  clearValue(control: 'priceFrom' | 'priceTo'): void {
    this.filterForm?.get(control)?.setValue(null);
  }
}
