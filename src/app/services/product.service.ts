import { Injectable } from '@angular/core';
import { Product } from '../Product';
import { PRODUCTS } from '../mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = PRODUCTS;

  toCurrency: any = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PHP',
  });
 
  getAllProducts(): Product[] {
    return this.products;
  }
  
  getProductById(id: number): Product{
    return this.products[id-1];
  }

  getAverageStars(reviews: any): number{
    let sum: number = 0;
    let average: number = 0;

    for(let i=0; i<reviews.length; i++){
      sum = (sum + reviews[i].stars);
    }
    average = sum / reviews.length;
    return Math.ceil(average);
  }
}
