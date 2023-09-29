import { Currency } from '../enums/currency.model';
import { BaseModel } from './base-model';

export class PromotionModel extends BaseModel {
  type: string = '';
  title: string = '';
  subtitle: string = '';
  description: string = '';
  services: string[] = [];
  price?: number;
  priceCurrency?: Currency;
  freeOfCharge?: boolean;
}
