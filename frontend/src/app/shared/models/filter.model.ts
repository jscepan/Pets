import { AdStatus } from '../enums/ad-status.model';
import { SellType } from '../enums/sell-type.model';
import { CityModel } from './city.model';
import { UserModel } from './user.model';

export class FilterModel {
  cities?: CityModel[];
  priceFrom?: number;
  priceTo?: number;
  sellTypes?: SellType[];
  adTypes?: string[];
  categories?: string[];
  subcategories?: string[];
  adstatuses?: AdStatus[];
  priceIsFixed?: boolean;
  freeOfCharge?: boolean;
  users?: UserModel[];
}
