import { BaseModel } from './base-model';

export class UserModel extends BaseModel {
  displayName: string = '';
  username: string = '';
  enabled: boolean = true;
  fullName: string = '';
  email: string = '';
  language: string = '';
  avatarUrl: string = '';
}
