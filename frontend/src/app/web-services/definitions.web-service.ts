import { Injectable } from '@angular/core';
import { BASE_API_URL, DOMAIN_DEFINITIONS } from '../shared/constants';
import { DefinitionModel } from '../shared/models/definitions.model';
import { Observable } from 'rxjs';
import { BaseWebService } from '../core/services/base.web-service';

@Injectable()
export class DefinitionsWebService {
  constructor(public baseWebService: BaseWebService) {}

  getAllDefinitions(): Observable<DefinitionModel> {
    return this.baseWebService.getRequest<DefinitionModel>(
      `${BASE_API_URL + '/' + DOMAIN_DEFINITIONS}`
      // this.ModelFromType
    );
  }
}
