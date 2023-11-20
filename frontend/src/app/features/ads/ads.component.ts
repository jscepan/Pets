import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PetsAdCardI } from 'src/app/shared/components/pets-ad-card/pets-ad-card.interface';
import { PetsSweetAlertService } from 'src/app/shared/components/pets-sweet-alert/pets-sweet-alert.service';
import {
  PageSize,
  PetsSearchDirectionTypes,
  SearchFilterModel,
  ViewType,
} from 'src/app/shared/models/search.model';
import { GlobalService } from 'src/app/shared/services/global.service';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';
import { AdWebService } from 'src/app/web-services/ad.web-service';
import { AdsService } from './ads.service';
import { SelectionManager } from 'src/app/shared/services/selection.manager';
import { FilterService } from 'src/app/shared/services/filter.service';
import { enumToEnumValueModel } from 'src/app/shared/utils';

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

  selectedFilter: Observable<SearchFilterModel> =
    this.filterService.selectedFilter;

  constructor(
    private globalService: GlobalService,
    private adsService: AdsService,
    private translateService: TranslateService,
    private sweetAlertService: PetsSweetAlertService,
    private router: Router,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.adsService.init();

    this.filterService.selectedFilter.subscribe((selectedFilter) => {
      this.adsService.setFilter(selectedFilter);
    });
  }

  filtersChanged(event: any): void {
    console.log(event);
    if (event.priceFrom) this.filterService.setPriceFrom(+event.priceFrom);
    if (event.priceTo) this.filterService.setPriceTo(+event.priceTo);
    if (event.type === 'viewType') {
      console.log('viewTypeviewTypeviewTypeviewType');
      console.log(event.value);
      console.log(ViewType.list);
      this.viewType = event.value as ViewType;
    }
  }

  goToPage(page: number): void {
    this.adsService.requestPageNumber(page);
  }

  changePageSize(size: number): void {
    this.adsService.setPageSize(size.toString() as PageSize);
  }

  trackByOid(_index: number, item: PetsAdCardI): string {
    return item.oid;
  }

  goToAd(ad: any): void {
    this.router.navigate(['ad-view/', ad.oid]);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
