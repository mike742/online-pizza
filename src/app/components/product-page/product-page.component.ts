import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { Size } from 'src/app/models/size';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  product: Product | undefined;
  imageUrl: string = '';
  price: number = 0;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.productService.getProduct(id).subscribe((p) => {
      this.product = p;
      this.imageUrl = p?.imageUrl || '';
      this.price = p?.price || 0;
    });
  }

  onSizeChange(size: any) {
    //console.log(size);

    if (this.product?.price !== undefined)
      switch (size) {
        case Size.MEDIUM: {
          this.price = this.product.price * 1.2;
          break;
        }
        case Size.LARGE: {
          this.price = this.product.price * 1.5;
          break;
        }
        default:
          this.price = this.product.price;
      }
  }
}
