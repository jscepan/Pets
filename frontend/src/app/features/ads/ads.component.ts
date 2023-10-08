import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { PetsAdCardI } from 'src/app/shared/components/pets-ad-card/pets-ad-card.interface';
import { PetsSweetAlertService } from 'src/app/shared/components/pets-sweet-alert/pets-sweet-alert.service';
import { SearchFilterModel } from 'src/app/shared/models/search.model';
import { GlobalService } from 'src/app/shared/services/global.service';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';
import { AdWebService } from 'src/app/web-services/ad.web-service';
import { AdsService } from './ads.service';
import { PetsSearchBarI } from 'src/app/shared/components/pets-search-bar/pets-search-bar.interface';
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

  searchFilter: SearchFilterModel = new SearchFilterModel();
  searchBarModel?: PetsSearchBarI;

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
      search: this.searchFilter,
      view: 'list',
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
    };
  }

  goToPage(page: number): void {
    this.adsService.requestPageNumber(page);
  }

  changePageSize(size: number): void {
    this.adsService.setPageSize(size);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
