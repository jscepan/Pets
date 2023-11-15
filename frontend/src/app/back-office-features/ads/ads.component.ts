import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/language.service';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';
import { TranslateService } from '@ngx-translate/core';
import { AdModel } from 'src/app/shared/models/ad.model';
import { AdWebService } from 'src/app/web-services/ad.web-service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { SearchFilterModel } from 'src/app/shared/models/search.model';
import { ImageModel } from 'src/app/shared/models/image.model';
import { BASE_API_URL, DOMAIN_IMAGES } from 'src/app/shared/constants';

@Component({
  selector: 'pets-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
  providers: [AdWebService],
})
export class AdsComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  displayedColumns: string[] = ['value'];
  ads: AdModel[] = [];

  columnsToDisplay = ['adType', 'category', 'adStatus', 'city', 'user'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement?: AdModel | null;

  constructor(
    private router: Router,
    private languageService: LanguageService,
    private translateService: TranslateService,
    private webService: AdWebService
  ) {}

  ngOnInit(): void {
    this.subs.sink = this.webService
      .searchEntities(new SearchFilterModel())
      .subscribe((response) => {
        this.ads = response.content;
      });
  }

  createNew(): void {
    // TODO
  }

  editItem(element: AdModel): void {
    // TODO
  }

  deactivateItem(element: AdModel): void {
    // TODO
  }

  getImageUrl(image: ImageModel): string {
    return `${BASE_API_URL}/${DOMAIN_IMAGES}/${image.oid}`;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
