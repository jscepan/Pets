import { Injectable } from '@angular/core';
import { BaseWebService } from '../core/services/base.web-service';
import { EntityBaseWebService } from '../core/services/entity-base.web-service';
import { BASE_API_URL, DOMAIN_USERS } from '../shared/constants';
import { Observable } from 'rxjs';
import { UserModel } from '../shared/models/user.model';

@Injectable()
export class UserWebService extends EntityBaseWebService<UserModel> {
  constructor(public override baseWebService: BaseWebService) {
    super(baseWebService, UserModel, DOMAIN_USERS);
  }

  getAllUsers(): Observable<UserModel[]> {
    return this.baseWebService.getRequest<UserModel[]>(
      `${BASE_API_URL + '/' + DOMAIN_USERS}`
    );
  }
}
