import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  cart: string[]=[];
  
  constructor(private state:CartService) { }

  ngOnInit(): void {
    this.state.cart$.subscribe((cart: string[]) => {
      this.cart = cart;
    });
  }

  add(){
    //Call this event whenever an item is added to cart.
  }

}
