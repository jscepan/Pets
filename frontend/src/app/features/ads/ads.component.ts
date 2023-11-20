import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PetsAdCardI } from 'src/app/shared/components/pets-ad-card/pets-ad-card.interface';
import { PetsSweetAlertService } from 'src/app/shared/components/pets-sweet-alert/pets-sweet-alert.service';
import {
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

  selectedFilter$: BehaviorSubject<SearchFilterModel | null> =
    new BehaviorSubject<SearchFilterModel | null>(null);

  constructor(
    private globalService: GlobalService,
    private adsService: AdsService,
    private translateService: TranslateService,
    private sweetAlertService: PetsSweetAlertService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.adsService.init();

    this.subs.sink = this.route.queryParams.subscribe((params) => {
      const filter = new SearchFilterModel();
      // quickSearch
      filter.quickSearch = params['quickSearch'];
      // adPage
      filter.adPage.pageNumber = +params['page'];
      filter.adPage.pageSize = params['pageSize'];
      filter.adPage.sortDirection = params['sortDirection'];
      filter.adPage.sortBy = params['sortBy'];
      // adSearchCriteria: FilterModel
      const filterModel: FilterModel = new FilterModel();
      filterModel.cities = params['cities'];
      filterModel.priceFrom = params['priceFrom'];
      filterModel.priceTo = params['priceTo'];
      filterModel.priceCurrency = params['priceCurrency'];
      filterModel.sellTypes = params['sellTypes'];
      filterModel.adTypes = params['adTypes'];
      filterModel.categories = params['categories'];
      filterModel.subcategories = params['subcategories'];
      filterModel.adstatuses = params['adstatuses'];
      filterModel.priceIsFixed = params['priceIsFixed'];
      filterModel.freeOfCharge = params['freeOfCharge'];
      filterModel.users = params['users'];
      filter.adSearchCriteria = filterModel;

      this.adsService.setFilter({ ...filter });
      this.selectedFilter$.next(filter);
    });
  }

  filtersChanged(event: { type: string; value: any }): void {
    switch (event.type) {
      case 'viewType':
        this.viewType = event.value as ViewType;
        break;
      case 'filterChange':
        const filter = event.value as FilterModel;
        console.log(filter);
        const queryParams = { ...this.route.snapshot.queryParams };
        queryParams['cities'] = filter.cities;
        queryParams['priceFrom'] = filter.priceFrom;
        queryParams['priceTo'] = filter.priceTo;
        queryParams['priceCurrency'] = filter.priceCurrency;
        queryParams['sellTypes'] = filter.sellTypes;
        queryParams['adTypes'] = filter.adTypes;
        queryParams['categories'] = filter.categories;
        queryParams['subcategories'] = filter.subcategories;
        queryParams['adstatuses'] = filter.adstatuses;
        queryParams['priceIsFixed'] = filter.priceIsFixed;
        queryParams['freeOfCharge'] = filter.freeOfCharge;
        queryParams['users'] = filter.users;
        this.router.navigate(['/ads'], { queryParams: queryParams });
        break;
      case 'pageSize':
        this.changePageSize(+event.value);
        break;
      case 'sort':
        this.changeSort(event.value as SortModel);
        break;
    }
  }

  goToPage(newPage: number): void {
    const queryParams = { ...this.route.snapshot.queryParams };
    queryParams['page'] = ++newPage;
    this.router.navigate(['/ads'], { queryParams: queryParams });
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
    this.router.navigate(['/ads'], { queryParams: queryParams });
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
