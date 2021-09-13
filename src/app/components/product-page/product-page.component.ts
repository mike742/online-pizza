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
    });
  }

  onSizeChange(size: any) {
    console.log(size);
  }
}
