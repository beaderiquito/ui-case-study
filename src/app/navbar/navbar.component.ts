import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent{
  cart: any[]=[];

  constructor(private cartService:CartService) {
    this.viewCart();
  }

  viewCart(): void {
    this.cart = this.cartService.viewCart();
  }
}
