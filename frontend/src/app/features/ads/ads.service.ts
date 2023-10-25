import { Injectable } from '@angular/core';
import { SearchFilterModel } from 'src/app/shared/models/search.model';
import { ListManager } from 'src/app/shared/services/list.manager';
import { AdModel } from 'src/app/shared/models/ad.model';
import { PetsAdCardI } from 'src/app/shared/components/pets-ad-card/pets-ad-card.interface';
import { AdWebService } from 'src/app/web-services/ad.web-service';
import { BASE_API_URL, DOMAIN_IMAGES } from 'src/app/shared/constants';
import { calculateTimeForCard } from 'src/app/shared/utils';

@Injectable()
export class AdsService extends ListManager<
  AdModel,
  PetsAdCardI,
  SearchFilterModel
> {
  constructor(private webService: AdWebService) {
    super();
    this.setRequestFn(this.webService.searchEntities);
    this.setResponseFn(this.prepareResponse.bind(this));
  }

  public prepareResponse(data: AdModel[]): PetsAdCardI[] {
    return data.map((ad) => ({
      oid: ad.oid,
      thumbnailUrl: ad.images?.length
        ? `${BASE_API_URL}/${DOMAIN_IMAGES}/${ad.images[0]?.oid}`
        : '',
      imageCounter: ad.images?.length || 0,
      videoCounter: ad.videos?.length || 0,
      time: ad.createdOn ? calculateTimeForCard(ad.createdOn) : '',
      title: ad.title || '',
      price: (ad.price || '') + (ad.priceCurrency || ''),
      characteristics: (ad.category || '') + (ad.subcategory || ''),
      description: ad.description || '',
      author: {
        thumbnailUrl: '',
        name: ad.contactName || '',
        location: 'Kruscic',
      },
      favorite: ad.inactive || false,
    }));
  }

  init(): void {
    this.setFilter(new SearchFilterModel());
  }
}
