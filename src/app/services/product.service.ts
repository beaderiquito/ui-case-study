import { Injectable } from '@angular/core';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  toCurrency: any = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PHP',
  });

  products: Product[] = [
    {id: 1, photo: '../assets/img/products/plain-butter-croissant.jpg', name: 'Plain Butter Croissant', price: 105, reviews: 
      [
          {username: 'username1', date: 'April 20, 2021', content: 'Excellent!', stars: 5},
          {username: 'username2', date: 'April 20, 2021', content: 'Ok quality.', stars: 3},
          {username: 'username3', date: 'April 20, 2021', content: 'Do not buy!', stars: 1},    
      ],
      description: 'Our croissant is a buttery, crescent-shaped French pastry. Enjoy this light, flaky, and delicately sweet croissant freshly made everyday. Enjoy one with a cup of coffee — to boost your productivity while enjoying this delicious treat.'
  },
  {id: 2, photo: '../assets/img/products/apple-danish.jpg', name: 'Apple Danish', price: 125, reviews:  
      [
          {username: 'username1', date: 'April 20, 2021', content: 'Excellent!', stars: 5},
          {username: 'username2', date: 'April 20, 2021', content: 'Ok quality.', stars: 2},
          {username: 'username3', date: 'April 20, 2021', content: 'Do not buy!', stars: 4},    
      ],
      description: 'Apple Danishes are the perfect way to welcome the cold season! The flaky crust, apple pie filling, crumb topping, and simple glaze make them irresistible. They make for a perfect snack but are also great for your cheat days.'
  },
  {id: 3, photo: '../assets/img/products/french-toast.jpg', name: 'French Toast', price: 150, reviews:  
      [
          {username: 'username1', date: 'April 20, 2021', content: 'Excellent!', stars: 5},
          {username: 'username2', date: 'April 20, 2021', content: 'Ok quality.', stars: 3},
          {username: 'username3', date: 'April 20, 2021', content: 'Do not buy!', stars: 1},    
      ],
      description: 'Our french toast is a slice of brioche bread dipped in milk and eggs, then pan fried in butter goodness. Each serving gives you two slices of bread topped with butter, syrup, powdered sugar, and some of your favorite berries.'
  },
  {id: 4, photo: '../assets/img/products/four-cheese-flatbread.jpg', name: 'Four Cheese Flatbread', price: 130, reviews:  
      [
          {username: 'username1', date: 'April 20, 2021', content: 'Excellent!', stars: 5},
          {username: 'username2', date: 'April 20, 2021', content: 'Ok quality.', stars: 3},
          {username: 'username3', date: 'April 20, 2021', content: 'Do not buy!', stars: 1},    
      ],
      description: 'Our four cheese flatbread is perfect all the cheese-lovers out there. This snack is made of pizza dough, topped with provolone, mozzarella, parmesan, and ricotta, oven-baked to perfection.'
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
      description: 'This scrumptious, satisfying cookie love will uplift your day—sweet white chocolate chips and chopped macademia nuts embedded in a thick, chewy goodness of our favorite dough make this an absolute must-have.'
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
