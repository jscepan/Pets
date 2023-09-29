import { Currency } from '../enums/currency.model';
import { SellType } from '../enums/sell-type.model';
import { BaseModel } from './base-model';
import { PromotionModel } from './promotion.model';

export class AdModel extends BaseModel {
  adType?: string;
  category?: string;
  subcategory?: string;

  title?: string;
  adSellType?: SellType;
  price?: number;
  priceCurrency?: Currency;
  priceIsFixed?: boolean;
  freeOfCharge?: boolean;
  description?: string;
  images?: [];

  country?: string;
  city?: string;
  contactName?: string;
  contactPhone?: string;

  promotion?: PromotionModel;

  inactive?: boolean;
  createdOn?: string;
}
