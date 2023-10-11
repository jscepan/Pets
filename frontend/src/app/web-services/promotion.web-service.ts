import { Injectable } from '@angular/core';
import { BaseWebService } from '../core/services/base.web-service';
import { EntityBaseWebService } from '../core/services/entity-base.web-service';
import { BASE_API_URL, DOMAIN_PROMOTIONS } from '../shared/constants';
import { PromotionModel } from '../shared/models/promotion.model';
import { Observable } from 'rxjs';

@Injectable()
export class PromotionWebService extends EntityBaseWebService<PromotionModel> {
  constructor(public override baseWebService: BaseWebService) {
    super(baseWebService, PromotionModel, DOMAIN_PROMOTIONS);
  }

  getAllPromotions(): Observable<PromotionModel> {
    return this.baseWebService.getRequest<PromotionModel>(
      `${BASE_API_URL + '/' + DOMAIN_PROMOTIONS}`
    );
  }
}
