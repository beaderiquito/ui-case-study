import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

productQuantity = 1;
myCart: any[][] = [];

  addToCart(productID: any, productName: string, productPrice: any){
      
      alert(productID);
      alert(productName);
      alert(productPrice);
      alert(this.myCart);
      if (this.myCart.length>0){
        for(let i=0; i<=this.myCart.length; i++){
          if (productID == this.myCart[i][0]){
            this.myCart[i][2] += productPrice;
            this.myCart[i][3] += 1;
            alert('Product exists!');
            alert(this.myCart);
              if (i==this.myCart.length && productID != this.myCart[i][0]) {
                //Add products to cart
                this.myCart.push([productID,productName,productPrice,this.productQuantity]);
                }//Add to cart
              }//Update cart price and quantity
        }//for
      }//If cart has an item
      else{
        this.myCart.push([productID,productName,productPrice,this.productQuantity]);
        alert('Product added!');
        alert(this.myCart);
      }//if cart has no item
  
  }

}
