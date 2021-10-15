import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../Product';
import { ProductService } from 'src/app/services/product.service';
import { SearchService } from '../../search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  searchTerm: string = this.searchService.searchTerm;
  selectedProduct?: Product;
  products: Product[] = [];
  toCurrency: any;
  header: string = '';

  constructor(
    public productService: ProductService,
    public router: Router,
    public route: ActivatedRoute,
    public searchService: SearchService
  ){}

  ngOnInit(): void {
    console.log('INIT'); 
    this.toCurrency = this.productService.toCurrency;
    this.route.params.subscribe(params => {
      if(params.searchTerm){
        this.products = this.productService.getAllProducts().filter(product => product.name.toLowerCase().includes(params.searchTerm.toLowerCase()) || product.description.toLowerCase().includes(params.searchTerm.toLowerCase()));
        this.header = `${this.products.length} matches for "${params.searchTerm.toLowerCase()}"`;
      }
      else{
        this.getAllProducts();
        this.header = 'All Products';
      }
     })
  }

  onSelect(product: Product): void{
    this.selectedProduct = product;
  }

  getAllProducts(): void { 
    this.products = this.productService.getAllProducts();
  }

  getAverageStars(reviews: any): number {
    return this.productService.getAverageStars(reviews);
  }

}
