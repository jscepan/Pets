import { environment } from 'src/environments/environment';
import { EnumValueModel } from './enums/enum.model';

export const NUMBER_OF_ITEMS_ON_PAGE: number = 5;

// BASE_API_URL should have value 'http://localhost:8081' in DEVELOPMENT MODE, otherwise empty string ''
// export const BASE_API_URL: string = '';
export const BASE_API_URL: string = environment.baseApiUrl + '/api';
export const DOMAIN_ADS: string = 'ads';
export const DOMAIN_PROMOTIONS: string = 'promotions';
export const DOMAIN_DEFINITIONS: string = 'definitions';

// Login form content type
export const LOGIN_FORM_CONTENT_TYPE: { 'Content-Type': string } = {
  'Content-Type': 'application/x-www-form-urlencoded',
};

////////////////////////////////////////////////////////////////////////

export const AD_STATUS: EnumValueModel[] = [
  { value: 'ACTIVE', displayName: 'active' },
  { value: 'PAUSED', displayName: 'paused' },
  { value: 'INACTIVE', displayName: 'inactive' },
];

export const CURRENCY: EnumValueModel[] = [
  { value: 'RSD', displayName: 'rsd' },
  { value: 'EUR', displayName: 'eur' },
];

export const SELL_TYPE: EnumValueModel[] = [
  { value: 'BUY', displayName: 'buy' },
  { value: 'SELL', displayName: 'sell' },
];
