import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PetsAdCardI } from 'src/app/shared/components/pets-ad-card/pets-ad-card.interface';
import { PetsSweetAlertService } from 'src/app/shared/components/pets-sweet-alert/pets-sweet-alert.service';
import {
  PageSize,
  PetsSearchDirectionTypes,
  PetsSearchSortByTypes,
  SearchFilterModel,
  ViewType,
} from 'src/app/shared/models/search.model';
import { GlobalService } from 'src/app/shared/services/global.service';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';
import { AdWebService } from 'src/app/web-services/ad.web-service';
import { AdsService } from './ads.service';
import { SelectionManager } from 'src/app/shared/services/selection.manager';
import { SortModel } from 'src/app/shared/models/sort.model';
import { FilterModel } from 'src/app/shared/models/filter.model';
import { getEnumFromKey, stringToEnumModel } from 'src/app/shared/utils';
import { EnumValueModel } from 'src/app/shared/enums/enum.model';
import { AdPageModel } from 'src/app/shared/models/ad-page.model';
import { SellType } from 'src/app/shared/enums/sell-type.model';
import { AdStatus } from 'src/app/shared/enums/ad-status.model';
import { Currency } from 'src/app/shared/enums/currency.model';
import { LanguageService } from 'src/app/language.service';
import { DefinitionsStoreService } from 'src/app/core/services/definitions-store.service';

@Component({
  selector: 'pets-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
  providers: [PetsSweetAlertService, AdWebService, AdsService],
})
export class AdsComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  keyword: string = '';
  public readonly entities?: Observable<PetsAdCardI[]> =
    this.adsService.response$;
  totalPageLength: Observable<number | undefined> =
    this.adsService.totalPageCount$;
  currentPage: Observable<number | undefined> = this.adsService.currentPage$;
  public readonly isLoading$: BehaviorSubject<boolean> =
    this.adsService.isLoading$;
  public readonly length$: BehaviorSubject<number | undefined> =
    this.adsService.length$;
  public readonly selection: SelectionManager<PetsAdCardI> =
    this.adsService.selection;

  viewType: ViewType = ViewType.list;
  viewTypeEnum = ViewType;

  definitionsLoaded$: Observable<boolean> =
    this.definitionsStoreService.dataLoaded$;
  selectedFilter$: BehaviorSubject<SearchFilterModel | null> =
    new BehaviorSubject<SearchFilterModel | null>(null);
  // selectedAdTypes: EnumValueModel[] | undefined;
  // selectedCategories: EnumValueModel[] = [];
  // selectedSubcategories: EnumValueModel[] = [];

  constructor(
    private globalService: GlobalService,
    private adsService: AdsService,
    private translateService: TranslateService,
    private sweetAlertService: PetsSweetAlertService,
    private languageService: LanguageService,
    private definitionsStoreService: DefinitionsStoreService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.adsService.init();

    this.definitionsLoaded$.subscribe((loaded) => {
      if (loaded) {
        this.subs.sink = this.route.queryParamMap.subscribe(
          (params: ParamMap) => {
            console.log('+++++++++++++++++++++++++');
            const filter = new SearchFilterModel();
            // quickSearch
            filter.quickSearch = params.get('quickSearch') || '';
            // adPage
            filter.adPage = this.mapAdPageFromParams(params);
            // adSearchCriteria: FilterModel
            filter.adSearchCriteria = this.mapFilterModelFromParams(params);

            // this.selectedAdTypes =
            //   this.definitionsStoreService.getAdTypesFromKeys(
            //     adTypes,
            //     this.languageService.selectedLanguage
            //   );

            this.adsService.setFilter({ ...filter });
            // this.selectedFilter$.next(filter);
          }
        );
      }
    });
  }

  mapAdPageFromParams(params: ParamMap): AdPageModel {
    const adPage: AdPageModel = new AdPageModel();

    const pageNumber = params.get('page');
    adPage.pageNumber = pageNumber ? +pageNumber : undefined;

    const pageSize: string | null = params.get('pageSize');
    if (pageSize) {
      const pageSizeEnumList = stringToEnumModel([pageSize], PageSize);
      adPage.pageSize = pageSizeEnumList
        ? (pageSizeEnumList as PageSize[])[0]
        : undefined;
    } else {
      adPage.pageSize = undefined;
    }

    const sortDirection: string | null = params.get('sortDirection');
    if (sortDirection) {
      const sortDirectionEnumList = stringToEnumModel(
        [sortDirection],
        PetsSearchDirectionTypes
      );
      adPage.sortDirection = sortDirectionEnumList
        ? (sortDirectionEnumList as PetsSearchDirectionTypes[])[0]
        : undefined;
    } else {
      adPage.sortDirection = undefined;
    }

    const sortBy: string | null = params.get('sortBy');
    if (sortBy) {
      const sortByEnumList = stringToEnumModel([sortBy], PetsSearchSortByTypes);
      adPage.sortBy = sortByEnumList
        ? (sortByEnumList as PetsSearchSortByTypes[])[0]
        : undefined;
    } else {
      adPage.sortBy = undefined;
    }
    return adPage;
  }

  mapFilterModelFromParams(params: ParamMap): FilterModel {
    const filterModel: FilterModel = new FilterModel();
    // filterModel.cities = params.get('cities');

    const priceFromNumber = params.get('priceFrom');
    filterModel.priceFrom = priceFromNumber ? +priceFromNumber : undefined;

    const priceToNumber = params.get('priceTo');
    filterModel.priceTo = priceToNumber ? +priceToNumber : undefined;

    const priceCurrency: string | null = params.get('priceCurrency');
    if (priceCurrency) {
      const priceCurrencyEnumList = stringToEnumModel(
        [priceCurrency],
        Currency
      );
      filterModel.priceCurrency = (priceCurrencyEnumList as Currency[])[0];
    } else {
      filterModel.priceCurrency = undefined;
    }

    const sellTypes: string[] = params.getAll('sellTypes');
    const sellTypeEnumList = stringToEnumModel(sellTypes, SellType);
    filterModel.sellTypes = sellTypeEnumList
      ? (sellTypeEnumList as SellType[])
      : undefined;

    filterModel.adTypes = params.getAll('adTypes');
    filterModel.categories = params.getAll('categories');
    filterModel.subcategories = params.getAll('subcategories');

    const adstatuses: string[] = params.getAll('adstatuses');
    const adstatusesEnumList = stringToEnumModel(adstatuses, AdStatus);
    filterModel.adstatuses = adstatusesEnumList
      ? (adstatusesEnumList as AdStatus[])
      : undefined;

    filterModel.priceIsFixed =
      params.get('priceIsFixed') === 'true' || undefined;
    filterModel.freeOfCharge =
      params.get('freeOfCharge') === 'true' || undefined;
    // filterModel.users = params.get('users');
    return filterModel;
  }

  filtersChanged(event: { type: string; value: any }): void {
    console.log(event);
    switch (event.type) {
      case 'viewType':
        this.viewType = event.value as ViewType;
        break;
      case 'filterChange':
        const filter = event.value;
        const queryParams = { ...this.route.snapshot.queryParams };
        queryParams['cities'] = filter.cities;
        queryParams['priceFrom'] = filter.priceFrom;
        queryParams['priceTo'] = filter.priceTo;
        queryParams['priceCurrency'] = getEnumFromKey(
          filter.priceCurrency?.value,
          Currency
        );
        queryParams['sellTypes'] = this.mapEnumsToStringsArray(
          filter.sellTypes
        );
        queryParams['adTypes'] = filter.adTypes.map(
          (a: EnumValueModel) => a.value
        );
        queryParams['categories'] = filter.categories.map(
          (a: EnumValueModel) => a.value
        );
        queryParams['subcategories'] = filter.subcategories.map(
          (a: EnumValueModel) => a.value
        );
        queryParams['adstatuses'] = filter.adstatuses;
        queryParams['priceIsFixed'] = filter.priceIsFixed;
        queryParams['freeOfCharge'] = filter.freeOfCharge;
        queryParams['users'] = filter.users;
        this.router.navigate(['/ads'], { queryParams });
        break;
      case 'pageSize':
        this.changePageSize(+event.value);
        break;
      case 'sort':
        this.changeSort(event.value as SortModel);
        break;
    }
  }

  mapEnumsToStringsArray(arr: EnumValueModel[]): string[] {
    const a: string[] = [];
    arr.forEach((element) => {
      a.push(element.value);
    });
    return a;
  }

  goToPage(newPage: number): void {
    const queryParams = { ...this.route.snapshot.queryParams };
    queryParams['page'] = ++newPage;
    this.router.navigate(['/ads'], { queryParams });
  }

  trackByOid(_index: number, item: PetsAdCardI): string {
    return item.oid;
  }

  goToAd(ad: any): void {
    this.router.navigate(['ad-view/', ad.oid]);
  }

  private changePageSize(size: number): void {
    const queryParams = { ...this.route.snapshot.queryParams };
    queryParams['pageSize'] = size;
    this.router.navigate(['/ads'], { queryParams });
  }

  private changeSort(sort: SortModel): void {
    const queryParams = { ...this.route.snapshot.queryParams };
    queryParams['sortDirection'] = sort.sortDirection;
    queryParams['sortBy'] = sort.sortBy;
    this.router.navigate(['/ads'], { queryParams: queryParams });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
