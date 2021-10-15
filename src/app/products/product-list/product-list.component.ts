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
  showSearchResults = true;
  searchTerm: string = '';
  selectedProduct?: Product;
  products: Product[] = [];
  searchResults: Product[] = [];

  constructor(
    public productService: ProductService,
    public router: Router,
    private route: ActivatedRoute,
    private searchService: SearchService,
  ){}

  ngOnInit(): void { }

  onSelect(product: Product): void{
    this.selectedProduct = product;
  }

  getAllProducts(): void { }

  searchProducts(searchQuery: string): void { }

}
