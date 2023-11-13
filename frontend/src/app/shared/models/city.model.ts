import { BaseModel } from './base-model';
import { CountryModel } from './country.model';

export class CityModel extends BaseModel {
  value: string = '';
  zipCode: string = '';
  country?: CountryModel;
}
