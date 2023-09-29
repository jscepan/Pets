import { BaseModel } from './base-model';

export class ImageModel extends BaseModel {
  name?: string;
  description?: string;
  index?: number;
  imageServer?: string;
}
