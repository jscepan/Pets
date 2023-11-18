import { Currency } from '../enums/currency.model';
import { SellType } from '../enums/sell-type.model';
import { BaseModel } from './base-model';
import { ImageModel } from './image.model';
import { PromotionModel } from './promotion.model';
import { VideoModel } from './video.model';
import { CityModel } from './city.model';
import { UserModel } from './user.model';
import { AdStatus } from '../enums/ad-status.model';

export class AdModel extends BaseModel {
  adType?: string;
  category?: string;
  subcategory?: string;

  title: string = '';
  adSellType?: SellType;
  price?: number;
  priceCurrency?: Currency;
  priceIsFixed?: boolean;
  freeOfCharge?: boolean;
  description: string = '';
  images: ImageModel[] = [];
  videos: VideoModel[] = [];

  city?: CityModel;
  contactName?: string;
  contactPhone?: string;

  promotion?: PromotionModel;

  inactive?: boolean;
  createdOn?: string;

  user?: UserModel;

  adStatus?: AdStatus;
}
