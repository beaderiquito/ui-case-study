import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../Product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  toCurrency: any;
  header: string = '';

  constructor(
    public productService: ProductService,
    public router: Router,
    public route: ActivatedRoute
  ){}

  ngOnInit(): void {
    //adds currency symbol to prices
    this.toCurrency = this.productService.toCurrency;

    //checks route parameter after 'products/' and looks for products that match the searchTerm
    this.route.params.subscribe(params => {
      if(params.searchTerm){
        this.products = this.productService.getAllProducts().filter(
          product => product.name.toLowerCase().includes(params.searchTerm.toLowerCase()) 
          || product.description.toLowerCase().includes(params.searchTerm.toLowerCase()));
        this.header = `${this.products.length} matches for "${params.searchTerm.toLowerCase()}"`;
      }

      //if there is no parameter after 'products/' get all products
      else{
        this.getAllProducts();
        this.header = 'All Products';
      }
     })
  }

  //gets all products
  getAllProducts(): void { 
    this.products = this.productService.getAllProducts();
  }

  //computes for the average stars
  getAverageStars(reviews: any): number {
    return this.productService.getAverageStars(reviews);
  }

}
