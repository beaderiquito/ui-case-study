import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  cart: string[]=[];
  
  constructor(private state:CartService) { }

  ngOnInit(): void {
  }
  
  
  

//   deleteProduct(product:string){
//     this.state.deleteFromCart('product-id');
//   }

}

