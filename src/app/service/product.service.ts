import { Injectable } from '@angular/core';
import { PRODUCTS } from '../mock-products';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProducts(): Product[] {
    return PRODUCTS;
  }

  getProduct(id: number): Product | undefined {
    const prod = PRODUCTS.find((p) => p.id === id);
    if (prod) return prod;
    return undefined;
  }
}
