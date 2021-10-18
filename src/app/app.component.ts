import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CartItem } from './cart-item.model';
import { AppState } from './store/app-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  cartItems!: Observable<CartItem[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(){
    this.cartItems = this.store.select(store => store.cart);
  }
}
