import { Injectable } from '@angular/core';
import { EntityBaseWebService } from '../core/services/entity-base.web-service';
import { BaseWebService } from '../core/services/base.web-service';
import { DOMAIN_DEFINITIONS } from '../shared/constants';
import { DefinitionModel } from '../shared/models/definitions.model';

@Injectable()
export class CaseWebService extends EntityBaseWebService<DefinitionModel> {
  constructor(public baseWebService: BaseWebService) {
    super(baseWebService, DefinitionModel, DOMAIN_DEFINITIONS);
  }
}
