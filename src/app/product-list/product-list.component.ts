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
  searchQuery: string = 'Product';
  selectedProduct?: Product;
  products: Product[] = [];
  searchedProducts: Product[] = [];

  constructor(
    public productService: ProductService,
    public router: Router
  ){}

  ngOnInit(): void {
    //this.getAllProducts();
    this.searchProducts(this.searchQuery);
  }

  onSelect(product: Product): void{
    this.selectedProduct = product;
    //this.closeProduct = true;
  }

  getAllProducts(): void {
    this.productService.getAllProducts()
      .subscribe(products => this.products = products);
  }

  searchProducts(searchQuery: string): void {
    for(let i= 0; i<this.products.length; i++){
      if(this.products[i].name.includes(searchQuery) || this.products[i].description.includes(searchQuery)){
        this.searchedProducts.push(this.products[i]);
      }
    }
    console.log("Returned search results.")
  }
}
