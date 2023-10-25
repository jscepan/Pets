import { Currency } from '../../enums/currency.model';
import { BaseModel } from '../../models/base-model';

export interface PetsAdCardI extends BaseModel {
  thumbnailUrl: string;
  imageCounter: number;
  videoCounter: number;
  time: string;
  title: string;
  price: string;
  priceCurrency?: string;
  characteristics: string;
  description: string;
  author: {
    thumbnailUrl: string;
    name: string;
    location: string;
  };
  favorite: boolean;
}
