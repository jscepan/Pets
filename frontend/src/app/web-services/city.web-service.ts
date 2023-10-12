import { Injectable } from '@angular/core';
import { BaseWebService } from '../core/services/base.web-service';
import { EntityBaseWebService } from '../core/services/entity-base.web-service';
import { BASE_API_URL, DOMAIN_CITY } from '../shared/constants';
import { CityModel } from '../shared/models/city.model';
import { Observable } from 'rxjs';

@Injectable()
export class CityWebService extends EntityBaseWebService<CityModel> {
  constructor(public override baseWebService: BaseWebService) {
    super(baseWebService, CityModel, DOMAIN_CITY);
  }

  getAllCities(): Observable<CityModel[]> {
    return this.baseWebService.getRequest<CityModel[]>(
      `${BASE_API_URL + '/' + DOMAIN_CITY}`
    );
  }
}
