import { ERole } from '../enums/e-role.model';
import { BaseModel } from './base-model';

export class RoleModel extends BaseModel {
  name?: ERole;
}
