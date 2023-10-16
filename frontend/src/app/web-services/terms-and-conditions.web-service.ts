import { Injectable } from '@angular/core';
import { BaseWebService } from '../core/services/base.web-service';
import { EntityBaseWebService } from '../core/services/entity-base.web-service';
import { BASE_API_URL, DOMAIN_TERMS_AND_CONDITIONS } from '../shared/constants';
import { Observable } from 'rxjs';
import { TermsAndConditionsModel } from '../shared/models/terms-and-conditions.model';

@Injectable()
export class TermsAndConditionsWebService extends EntityBaseWebService<TermsAndConditionsModel> {
  constructor(public override baseWebService: BaseWebService) {
    super(baseWebService, TermsAndConditionsModel, DOMAIN_TERMS_AND_CONDITIONS);
  }

  getAllTermsAndConditions(): Observable<TermsAndConditionsModel[]> {
    return this.baseWebService.getRequest<TermsAndConditionsModel[]>(
      `${BASE_API_URL + '/' + DOMAIN_TERMS_AND_CONDITIONS}`
    );
  }
}
