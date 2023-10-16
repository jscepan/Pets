import { Injectable } from '@angular/core';
import { BaseWebService } from '../core/services/base.web-service';
import { EntityBaseWebService } from '../core/services/entity-base.web-service';
import { BASE_API_URL, DOMAIN_COUNTRY } from '../shared/constants';
import { CountryModel } from '../shared/models/country.model';
import { Observable } from 'rxjs';

@Injectable()
export class CountryWebService extends EntityBaseWebService<CountryModel> {
  constructor(public override baseWebService: BaseWebService) {
    super(baseWebService, CountryModel, DOMAIN_COUNTRY);
  }

  getAllCountries(): Observable<CountryModel[]> {
    return this.baseWebService.getRequest<CountryModel[]>(
      `${BASE_API_URL + '/' + DOMAIN_COUNTRY}`
    );
  }
}
