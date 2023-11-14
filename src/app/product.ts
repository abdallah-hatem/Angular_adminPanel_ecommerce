type STC = {
  sizeId: number;
  colors: Array<number>;
  quantity: number;
  sizeToColorsId: number;
};

export class Product {
  name: string;
  price: number;
  desc: string;
  categoryId: number;
  sizeToColors: Array<STC>;
}
export class ProductUpdate {
  name?: string;
  price?: number;
  desc?: string;
  categoryId?: number;
  sizeToColors?: Array<STC>;
}
