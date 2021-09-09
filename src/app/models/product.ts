import { Size } from './size';
import { Topping } from './topping';

export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  toppings: Topping[];
  sizes: Size[];
}
