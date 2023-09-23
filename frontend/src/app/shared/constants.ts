import { environment } from 'src/environments/environment';
import { EnumValueModel } from './components/enums/enum.model';

// BASE_API_URL should have value 'http://localhost:8081' in DEVELOPMENT MODE, otherwise empty string ''
// export const BASE_API_URL: string = '';
export const BASE_API_URL: string = environment.baseApiUrl;

export const DOMAIN_DEFINITIONS: string = 'definitions';
export const DOMAIN_COUNTRIES: string = 'countries';
export const DOMAIN_USERS: string = 'users';
export const DOMAIN_INCOMES: string = 'incomes';
export const DOMAIN_OUTCOMES: string = 'outcomes';
export const DOMAIN_CITY: string = 'cities';
export const DOMAIN_IMAGES: string = 'images';
export const DOMAIN_INVOICES: string = 'invoices';
export const DOMAIN_ROLES: string = 'roles';
export const DOMAIN_WORK_ORDERS: string = 'workorders';
export const DOMAIN_HISTORY: string = 'histories';

// Login form content type
export const LOGIN_FORM_CONTENT_TYPE: { 'Content-Type': string } = {
  'Content-Type': 'application/x-www-form-urlencoded',
};

////////////////////////////////////////////////////////////////////////

export const PRIVILEGES: EnumValueModel[] = [
  { value: 'USER_ANY', displayName: 'userBasicPrivileges' },
];

export const BUYER_TYPES: EnumValueModel[] = [
  { value: 'COMPANY', displayName: 'company' },
  { value: 'PERSON', displayName: 'person' },
];

export const GENDER_TYPES: EnumValueModel[] = [
  { value: 'MAN', displayName: 'man' },
  { value: 'WOMAN', displayName: 'woman' },
  { value: 'REST', displayName: 'rest' },
];
