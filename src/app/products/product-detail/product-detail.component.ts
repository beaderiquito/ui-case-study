import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  id: string | null = '';
  productId: number = 0;
  products: Product[] = [];
  product: any;
  average: number = 0;

  constructor(private _route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
      this.id = params.get('product-id');
    });

    this.productId = Number(this.id);
    this.product = this.productService.getProductById(this.productId);
    this.average = this.productService.getAverageStars(this.product.reviews);
  }
}