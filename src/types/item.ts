import { Product } from "./product";

export default interface Item {
  id: number | string;
  quantity: number;
  product: Product;
}
