import { Injectable } from '@angular/core';
import { BaseWebService } from '../core/services/base.web-service';
import { EntityBaseWebService } from '../core/services/entity-base.web-service';
import { AdModel } from '../shared/models/ad.model';
import { DOMAIN_ADS } from '../shared/constants';

@Injectable()
export class AdWebService extends EntityBaseWebService<AdModel> {
  constructor(public override baseWebService: BaseWebService) {
    super(baseWebService, AdModel, DOMAIN_ADS);
  }
}
