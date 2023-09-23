export interface AdCardI {
  thumbnailUrl: string;
  imageCounter: number;
  videoCounter: number;
  time: string;
  title: string;
  price: string;
  characteristics: string;
  description: string;
  author: {
    thumbnailUrl: string;
    name: string;
    location: string;
  };
  favorite: boolean;
}
