import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  //To close list of products:
  //closeProduct: boolean = false;
  searchQuery: string = '';
  selectedProduct?: Product;
  products: Product[] = [];

  constructor(
    public productService: ProductService,
    public router: Router
  ){}

  ngOnInit(): void {
    this.getProducts();
  }

  onSelect(product: Product): void{
    this.selectedProduct = product;
    //this.closeProduct = true;
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }
}
