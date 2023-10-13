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

  columnsToDisplay = [
    'username',
    'email',
    'displayName',
    'city',
    'phoneNumber',
    'fullName',
    'language',
    'inactive',
    'edit',
    'deactivate',
  ];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement?: AdModel | null;

  constructor(
    private router: Router,
    private languageService: LanguageService,
    private translateService: TranslateService,
    private webService: AdWebService
  ) {}

  ngOnInit(): void {
    // this.subs.sink = this.webService.searchEntities().subscribe((ads) => {
    //   this.ads = ads;
    // });
  }

  editItem(element: AdModel): void {
    // TODO
  }

  deactivateItem(element: AdModel): void {
    // TODO
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
