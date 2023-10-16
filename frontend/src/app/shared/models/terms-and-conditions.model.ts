import { Currency } from '../enums/currency.model';
import { BaseModel } from './base-model';
import { RoleModel } from './role.model';

export class TermsAndConditionsModel extends BaseModel {
  title: string = '';
  createdOn: string = '';
  inactive?: boolean;
  roles: RoleModel[] = [];
  price?: number;
  priceCurrency?: Currency;
  freeOfCharge?: boolean;
}
