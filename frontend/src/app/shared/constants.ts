import { environment } from 'src/environments/environment';
import { EnumValueModel } from './enums/enum.model';

// BASE_API_URL should have value 'http://localhost:8081' in DEVELOPMENT MODE, otherwise empty string ''
// export const BASE_API_URL: string = '';
export const BASE_API_URL: string = environment.baseApiUrl + '/api';
export const DOMAIN_ADS: string = 'ads';
export const DOMAIN_IMAGES: string = 'images';
export const DOMAIN_CITY: string = 'cities';
export const DOMAIN_COUNTRY: string = 'countries';
export const DOMAIN_PROMOTIONS: string = 'promotions';
export const DOMAIN_DEFINITIONS: string = 'definitions';
export const DOMAIN_USERS: string = 'users';
export const DOMAIN_TERMS_AND_CONDITIONS: string = 'termsAndConditions';

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

export const PAGE_SIZE: EnumValueModel[] = [
  { value: '10', displayName: '10' },
  { value: '20', displayName: '20' },
  { value: '50', displayName: '50' },
];
