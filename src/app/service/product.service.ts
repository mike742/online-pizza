import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

  getProduct(id: number): Observable<Product | undefined> {
    const prod = PRODUCTS.find((p) => p.id === id);
    return of(prod);
  }
}
