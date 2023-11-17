import { SizeToColorsUpdate } from './size-to-colors';

export class Product {
  name: string;
  price: number;
  desc: string;
  categoryId: number;
  sizeToColors: SizeToColorsUpdate;
}
export class ProductUpdate {
  name?: string;
  price?: number;
  desc?: string;
  categoryId?: number;
  sizeToColors?: SizeToColorsUpdate;
}
