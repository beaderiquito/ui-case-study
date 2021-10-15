import { Injectable } from '@angular/core';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {id: 1, photo: 'https://image.freepik.com/free-psd/arrangement-colorful-mock-up-doypack_23-2149015936.jpg', name: 'Pineapple', price: 1000, reviews: 
      [
          {username: 'username1', date: 'April 20, 2021', content: 'Excellent!', stars: 5},
          {username: 'username2', date: 'April 20, 2021', content: 'Ok quality.', stars: 3},
          {username: 'username3', date: 'April 20, 2021', content: 'Do not buy!', stars: 1},    
      ],
      description: 'Product description'
  },
  {id: 2, photo: 'https://image.freepik.com/free-psd/arrangement-colorful-mock-up-doypack_23-2149015936.jpg', name: 'Apple', price: 2000, reviews:  
      [
          {username: 'username1', date: 'April 20, 2021', content: 'Excellent!', stars: 5},
          {username: 'username2', date: 'April 20, 2021', content: 'Ok quality.', stars: 2},
          {username: 'username3', date: 'April 20, 2021', content: 'Do not buy!', stars: 4},    
      ],
      description: 'Product description'
  },
  {id: 3, photo: 'https://image.freepik.com/free-psd/arrangement-colorful-mock-up-doypack_23-2149015936.jpg', name: 'Kiwi-apple', price: 3000, reviews:  
      [
          {username: 'username1', date: 'April 20, 2021', content: 'Excellent!', stars: 5},
          {username: 'username2', date: 'April 20, 2021', content: 'Ok quality.', stars: 3},
          {username: 'username3', date: 'April 20, 2021', content: 'Do not buy!', stars: 1},    
      ],
      description: 'Product description'
  },
  {id: 4, photo: 'https://image.freepik.com/free-psd/arrangement-colorful-mock-up-doypack_23-2149015936.jpg', name: 'Product 4', price: 4000, reviews:  
      [
          {username: 'username1', date: 'April 20, 2021', content: 'Excellent!', stars: 5},
          {username: 'username2', date: 'April 20, 2021', content: 'Ok quality.', stars: 3},
          {username: 'username3', date: 'April 20, 2021', content: 'Do not buy!', stars: 1},    
      ],
      description: 'Product description'
  },
  {id: 5, photo: 'https://image.freepik.com/free-psd/arrangement-colorful-mock-up-doypack_23-2149015936.jpg', name: 'Product 5', price: 5000, reviews:  
      [
          {username: 'username1', date: 'April 20, 2021', content: 'Excellent!', stars: 5},
          {username: 'username2', date: 'April 20, 2021', content: 'Ok quality.', stars: 3},
          {username: 'username3', date: 'April 20, 2021', content: 'Do not buy!', stars: 1},    
      ],
      description: 'Product description'
  },
  {id: 6, photo: 'https://image.freepik.com/free-psd/arrangement-colorful-mock-up-doypack_23-2149015936.jpg', name: 'Product 6', price: 6000, reviews:  
      [
          {username: 'username1', date: 'April 20, 2021', content: 'Excellent!', stars: 5},
          {username: 'username2', date: 'April 20, 2021', content: 'Ok quality.', stars: 3},
          {username: 'username3', date: 'April 20, 2021', content: 'Do not buy!', stars: 1},    
      ],
      description: 'Product description'
  }
  ]

  getAllProducts(): Product[] {
    return this.products;
  }
  
  getProductById(id: number): Product{
    return this.products[id-1];
  }

  getProductsBySearchTerm(searchTerm: string): Product[] {
    searchTerm = searchTerm.toLowerCase();
    return this.products.filter(product => product.name.toLowerCase().includes(searchTerm));
  }

  getAverageStars(product: Product): number{
    let sum: number = 0;
    let average: number = 0;
    for(let i=0; i<product.reviews.length; i++){
      sum = (sum + product.reviews[i].stars);
    }
    average = sum / product.reviews.length;
    return Math.ceil(average);
  }
}
