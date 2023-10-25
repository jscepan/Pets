import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DefinitionsStoreService } from 'src/app/core/services/definitions-store.service';
import { LanguageService } from 'src/app/language.service';
import { SubscriptionManager } from 'src/app/shared/services/subscription.manager';
import { TranslateService } from '@ngx-translate/core';
import { AdModel } from 'src/app/shared/models/ad.model';
import { AdWebService } from 'src/app/web-services/ad.web-service';
import { CarouselImagesI } from 'src/app/shared/components/pets-carousel/pets-carousel.component';
import { BASE_API_URL, DOMAIN_IMAGES } from 'src/app/shared/constants';

@Component({
  selector: 'pets-ad-view',
  templateUrl: './ad-view.component.html',
  styleUrls: ['./ad-view.component.scss'],
  providers: [AdWebService],
})
export class AdViewComponent implements OnInit, OnDestroy {
  public subs: SubscriptionManager = new SubscriptionManager();

  ad?: AdModel;
  images: CarouselImagesI[] = [];

  constructor(
    private definitionsStoreService: DefinitionsStoreService,
    private router: Router,
    private languageService: LanguageService,
    private translateService: TranslateService,
    private route: ActivatedRoute,
    private webService: AdWebService
  ) {}

  ngOnInit(): void {
    const oid = this.route.snapshot.paramMap.get('oid');
    if (oid) {
      this.subs.sink = this.webService.getEntityByOid(oid).subscribe((ad) => {
        this.ad = ad;
        ad.images.forEach((i) => {
          this.images.push({
            imageOid: i.oid,
            imageUrl: `${BASE_API_URL}/${DOMAIN_IMAGES}/${i.oid}`,
          });
        });
      });
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
