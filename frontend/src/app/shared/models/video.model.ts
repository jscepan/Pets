import { BaseModel } from './base-model';

export class VideoModel extends BaseModel {
  name?: string;
  description?: string;
  index?: number;
  imageServer?: string;
}
