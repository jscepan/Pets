import { AvatarModel } from './avatar.model';
import { BaseModel } from './base-model';
import { CityModel } from './city.model';
import { RoleModel } from './role.model';
import { TermsAndConditionsModel } from './terms-and-conditions.model';

export class UserModel extends BaseModel {
  username: string = '';
  email: string = '';
  displayName: string = '';
  city?: CityModel;
  phoneNumber: string = '';
  inactive: boolean = false;
  fullName: string = '';
  language: string = '';
  avatar?: AvatarModel;
  roles: RoleModel[] = [];
  termsAndConditions: TermsAndConditionsModel[] = [];
}
