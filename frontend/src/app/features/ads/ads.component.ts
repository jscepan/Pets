import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SweetAlertService } from 'src/app/shared/components/sweet-alert/sweet-alert.service';
import { SearchModel } from 'src/app/shared/models/search.model';
import { GlobalService } from 'src/app/shared/services/global.service';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';
@Component({
  selector: 'pets-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
  providers: [SweetAlertService],
})
export class AdsComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  keyword: string = '';

  searchFilter: SearchModel = new SearchModel();

  constructor(
    private globalService: GlobalService,
    private translateService: TranslateService,
    private sweetAlertService: SweetAlertService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
