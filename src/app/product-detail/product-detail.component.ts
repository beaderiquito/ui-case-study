import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Product';
import { ProductService } from '../product.service';

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

  constructor(private _route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
      this.id = params.get('product-id');
    });

    this.productId = Number(this.id);
    this.getProductDetails();
  }

  getAllProducts(): void {
    this.productService.getAllProducts()
      .subscribe(products => this.products = products);
    this.products = this.products;
  }

  getProductDetails(): void {
    this.productService.getProduct(this.productId)
      .subscribe(product => this.product = product);
    this.product = this.product;
  }

  getAverageStars(array: any){
    let average: number = 0;
    for(let i=0; i<array.length; i++){
      average = (average + array[i].stars) / (i+1);
    }
    return Math.ceil(average);
  }
}