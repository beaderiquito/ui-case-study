import { Injectable } from '@angular/core';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {id: 1, photo: '../assets/img/products/plain-butter-croissant.jpg', name: 'Plain Butter Croissant', price: 105, reviews: 
      [
          {username: 'username1', date: 'April 20, 2021', content: 'Excellent!', stars: 5},
          {username: 'username2', date: 'April 20, 2021', content: 'Ok quality.', stars: 3},
          {username: 'username3', date: 'April 20, 2021', content: 'Do not buy!', stars: 1},    
      ],
      description: 'Product description'
  },
  {id: 2, photo: '../assets/img/products/apple-danish.jpg', name: 'Apple Danish', price: 125, reviews:  
      [
          {username: 'username1', date: 'April 20, 2021', content: 'Excellent!', stars: 5},
          {username: 'username2', date: 'April 20, 2021', content: 'Ok quality.', stars: 2},
          {username: 'username3', date: 'April 20, 2021', content: 'Do not buy!', stars: 4},    
      ],
      description: 'Product description'
  },
  {id: 3, photo: '../assets/img/products/french-toast.jpg', name: 'French Toast', price: 150, reviews:  
      [
          {username: 'username1', date: 'April 20, 2021', content: 'Excellent!', stars: 5},
          {username: 'username2', date: 'April 20, 2021', content: 'Ok quality.', stars: 3},
          {username: 'username3', date: 'April 20, 2021', content: 'Do not buy!', stars: 1},    
      ],
      description: 'Product description'
  },
  {id: 4, photo: '../assets/img/products/four-cheese-flatbread.jpg', name: 'Four Cheese Flatbread', price: 130, reviews:  
      [
          {username: 'username1', date: 'April 20, 2021', content: 'Excellent!', stars: 5},
          {username: 'username2', date: 'April 20, 2021', content: 'Ok quality.', stars: 3},
          {username: 'username3', date: 'April 20, 2021', content: 'Do not buy!', stars: 1},    
      ],
      description: 'Product description'
  },
  {id: 5, photo: '../assets/img/products/cinnamon-roll.jpg', name: 'Cinnamon Roll', price: 120, reviews:  
      [
          {username: 'username1', date: 'April 20, 2021', content: 'Excellent!', stars: 5},
          {username: 'username2', date: 'April 20, 2021', content: 'Ok quality.', stars: 3},
          {username: 'username3', date: 'April 20, 2021', content: 'Do not buy!', stars: 1},    
      ],
      description: 'Product description'
  },
  {id: 6, photo: '../assets/img/products/white-chocolate-macademia-cookie.jpg', name: 'White Chocolate Macademia Cookie', price: 95, reviews:  
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
