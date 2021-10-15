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
  showSearchResults = false;
  searchTerm: string = '';
  selectedProduct?: Product;
  products: Product[] = [];
  toCurrency: any;

  constructor(
    public productService: ProductService,
    public router: Router,
    private route: ActivatedRoute,
    private searchService: SearchService,
  ){}

  ngOnInit(): void { 
    this.getAllProducts();
    this.toCurrency = this.productService.toCurrency;
  }

  onSelect(product: Product): void{
    this.selectedProduct = product;
  }

  getAllProducts(): void { 
    this.products = this.productService.getAllProducts();
   }

  searchProducts(searchQuery: string): void { }

  getAverageStars(reviews: any): number {
    return this.productService.getAverageStars(reviews);
  }

  

}
