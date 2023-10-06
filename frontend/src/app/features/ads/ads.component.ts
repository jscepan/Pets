import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { PetsAdCardI } from 'src/app/shared/components/pets-ad-card/pets-ad-card.interface';
import { PetsSweetAlertService } from 'src/app/shared/components/pets-sweet-alert/pets-sweet-alert.service';
import { AdModel } from 'src/app/shared/models/ad.model';
import { SearchFilterModel } from 'src/app/shared/models/search.model';
import { GlobalService } from 'src/app/shared/services/global.service';
import { ListEntities } from 'src/app/shared/services/list-entities';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';
import { AdWebService } from 'src/app/web-services/ad.web-service';
import { AdsService } from './ads.service';
@Component({
  selector: 'pets-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
  providers: [PetsSweetAlertService, ListEntities, AdWebService, AdsService],
})
export class AdsComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  keyword: string = '';
  public readonly entities?: Observable<PetsAdCardI[]> =
    this.adsService.response$;
  totalEntitiesLength: Observable<number | undefined> =
    this.listEntities.totalEntitiesLength;
  currentPage: Observable<number | undefined> =
    this.listEntities.totalEntitiesLength;

  searchFilter: SearchFilterModel = new SearchFilterModel();

  constructor(
    private globalService: GlobalService,
    private adsService: AdsService,
    private translateService: TranslateService,
    private sweetAlertService: PetsSweetAlertService,
    private listEntities: ListEntities<AdModel>,
    private router: Router,
    private webService: AdWebService
  ) {}

  ngOnInit(): void {
    this.adsService.init();
    this.adsService.requestFirstPage();
    // this.subs.sink = this.listEntities
    //   .setWebService(this.webService)
    //   .requestFirstPage();

    // this.subs.sink = this.entities?.subscribe((ent) => {
    //   console.log('ententententententent');
    //   console.log(ent);
    // });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
