import { Currency } from '../enums/currency.model';
import { SellType } from '../enums/sell-type.model';
import { BaseModel } from './base-model';
import { ImageModel } from './image.model';
import { PromotionModel } from './promotion.model';
import { VideoModel } from './video.model';

export class AdModel extends BaseModel {
  adType?: string;
  category?: string;
  subcategory?: string;

  title: string='';
  adSellType?: SellType;
  price?: number;
  priceCurrency?: Currency;
  priceIsFixed?: boolean;
  freeOfCharge?: boolean;
  description: string='';
  images?: ImageModel[];
  videos?: VideoModel[];

  city?: string;
  contactName?: string;
  contactPhone?: string;

  promotion?: PromotionModel;

  inactive?: boolean;
  createdOn?: string;
}
