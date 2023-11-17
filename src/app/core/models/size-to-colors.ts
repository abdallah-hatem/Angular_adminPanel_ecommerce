export class SizeToColorsAdd {
  productId: number;
  sizeId: number;
  colors: Array<number>;
  quantity: number;
}
export class SizeToColorsUpdate {
  id: number;
  colors?: Array<number>;
  quantity?: number;
}
