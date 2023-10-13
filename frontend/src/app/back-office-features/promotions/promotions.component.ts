import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/language.service';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';
import { TranslateService } from '@ngx-translate/core';
import { PromotionWebService } from 'src/app/web-services/promotion.web-service';
import { PromotionModel } from 'src/app/shared/models/promotion.model';

@Component({
  selector: 'pets-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss'],
  providers: [PromotionWebService],
})
export class PromotionsComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  displayedColumns: string[] = [
    'id',
    'type',
    'title',
    'subtitle',
    'description',
    'createdOn',
    'services',
    'points',
    'price',
    'priceCurrency',
    'freeOfCharge',
    'inactive',
  ];
  promotions: PromotionModel[] = [];

  constructor(
    private router: Router,
    private languageService: LanguageService,
    private translateService: TranslateService,
    private webService: PromotionWebService
  ) {}

  ngOnInit(): void {
    this.subs.sink = this.webService
      .getAllPromotions()
      .subscribe((promotions) => {
        this.promotions = promotions;
      });
  }

  editItem(element: PromotionModel): void {
    // TODO
  }

  deleteItem(element: PromotionModel): void {
    // TODO
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
