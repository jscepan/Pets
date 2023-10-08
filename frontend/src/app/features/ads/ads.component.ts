import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PetsAdCardI } from 'src/app/shared/components/pets-ad-card/pets-ad-card.interface';
import { PetsSweetAlertService } from 'src/app/shared/components/pets-sweet-alert/pets-sweet-alert.service';
import {
  PageSize,
  SearchFilterModel,
  ViewType,
} from 'src/app/shared/models/search.model';
import { GlobalService } from 'src/app/shared/services/global.service';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';
import { AdWebService } from 'src/app/web-services/ad.web-service';
import { AdsService } from './ads.service';
import { PetsSearchBarI } from 'src/app/shared/components/pets-search-bar/pets-search-bar.interface';
import { SelectionManager } from 'src/app/shared/services/selection.manager';
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

  searchFilter: SearchFilterModel = new SearchFilterModel();
  searchBarModel?: PetsSearchBarI;

  viewType: ViewType = ViewType.list;
  viewTypeEnum = ViewType;

  constructor(
    private globalService: GlobalService,
    private adsService: AdsService,
    private translateService: TranslateService,
    private sweetAlertService: PetsSweetAlertService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.adsService.init();
    this.setSearchBar();
  }

  setSearchBar(): void {
    this.searchBarModel = {
      searchText: '',
      view: ViewType.list,
      sort: {
        selected: 'yyy',
        options: [
          {
            value: 'xxx',
            displayName: 'Xxxxx',
          },
          {
            value: 'yyy',
            displayName: 'Yuyuyuy',
          },
        ],
      },
      pageSize: {
        selected: PageSize.fifthy.toString(),
        options: [
          {
            value: PageSize.ten.toString(),
            displayName: PageSize.ten.toString(),
          },
          {
            value: PageSize.twenty.toString(),
            displayName: PageSize.twenty.toString(),
          },
          {
            value: PageSize.fifthy.toString(),
            displayName: PageSize.fifthy.toString(),
          },
        ],
      },
    };
  }

  searchBarEventHandler(event: any): void {
    console.log('event');
    console.log(event);
    switch (event.type) {
      case 'pageSize':
        this.adsService.setPageSize(event.value);
        break;
      case 'sort':
        //
        break;
      case 'viewType':
        this.viewType = event.value;
        break;
    }
  }

  goToPage(page: number): void {
    this.adsService.requestPageNumber(page);
  }

  changePageSize(size: number): void {
    this.adsService.setPageSize(size);
  }

  trackByOid(_index: number, item: PetsAdCardI): string {
    return item.oid;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
