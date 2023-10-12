import { AvatarModel } from './avatar.model';
import { BaseModel } from './base-model';

export class UserModel extends BaseModel {
  username: string = '';
  email: string = '';
  displayName: string = '';
  city: string = '';
  phoneNumber: string = '';
  inactive: boolean = false;
  fullName: string = '';
  language: string = '';
  avatar: AvatarModel = new AvatarModel();
}
