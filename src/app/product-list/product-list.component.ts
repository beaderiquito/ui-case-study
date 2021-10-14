import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Product';
import { ProductService } from '../product.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  showSearchResults = false;
  searchQuery: string = '';
  selectedProduct?: Product;
  products: Product[] = [];
  searchResults: Product[] = [];

  constructor(
    public productService: ProductService,
    public router: Router,
    private searchService: SearchService
  ){}

  ngOnInit(): void {
    this.getAllProducts();
    this.searchService.currentSearchInput.subscribe(input => this.searchQuery = input);
    console.log(this.searchQuery);
    if(this.searchQuery.trim() !== ""){
      this.searchProducts(this.searchQuery);
    }
  }

  onSelect(product: Product): void{
    this.selectedProduct = product;
  }

  getAllProducts(): void {
    this.productService.getAllProducts()
      .subscribe(products => this.products = products);
    this.products = this.products;
  }

  searchProducts(searchQuery: string): void {
    console.log('entered searchProducts');
    searchQuery = searchQuery.toLowerCase().trim();
    //clear the array products
    this.searchResults.length = 0;

    //searches for products that include the substring searchQuery in their name or description
    for(let i= 0; i<this.products.length; i++){
      if(this.products[i].name.toLowerCase().includes(searchQuery) || this.products[i].description.toLowerCase().includes(searchQuery)){
        this.searchResults.push(this.products[i]);
      }
    }

    this.products = this.searchResults;
    this.showSearchResults = true;
  }

  getAverageStars(array: any){
    let average: number = 0;
    for(let i=0; i<array.length; i++){
      average = (average + array[i].stars) / (i+1);
    }
    return Math.ceil(average);
  }
}
