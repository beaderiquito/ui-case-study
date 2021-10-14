import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

cart$ = new BehaviorSubject<string[]>([]);

addToCart(product: string){
  let Content = this.cart$.value;
  this.cart$.next([...Content, product]);

}
}
