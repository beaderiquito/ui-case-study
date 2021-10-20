import { Injectable, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private toastr: ToastrService){};

  productQuantity = 1;
  myCart: any[] = [];
  total = 0;
 
  addToCart(productID: any, productName: any, productPrice: number, productPhoto: string){
      
    if (this.myCart.length>0){
      
        for(let i=0; 0<this.myCart.length;i++){
          if (productID == this.myCart[i][0]) {
                this.myCart[i][3] += 1;
                this.addedToCart(productName);
                break;
          }//Update product price and quantity
          else if (productID != this.myCart[i][0] && this.myCart.length-1 == i){
                this.myCart.push([productID,productName,productPrice,this.productQuantity, productPhoto]);
                this.addedToCart(productName);
                break;
          }//if cart has no existing item
        
        }//loop myCartLength
      }//If cart has an item
     else{
          this.myCart.push([productID,productName,productPrice,this.productQuantity, productPhoto]);
          this.addedToCart(productName);
      }//if cart has no item

      this.total = this.computeTotal(this.myCart);
  }//add to cart
  
  removeProduct(productToDelete: any){
    for(let i=0; i<this.myCart.length; i++){
      if(i == productToDelete) {
        this.myCart.splice(i,1);
      }
    }

    this.total = this.computeTotal(this.myCart);
  }//removeProduct

  viewCart(): any[] {
    return this.myCart;
  }

  addedToCart(product: string) {
    this.toastr.success('successfully added to cart!', '1 ' + product.toUpperCase(), {
      timeOut: 3000,
      positionClass: 'toast-bottom-right'
    });
  }
  
  /* Total Price Computation */
  computeTotal(cart: any): number {
    let price = 0;
    let quantity = 0;
    let total = 0;

    for (let product of cart) {
      price = product[2];
      quantity = product[3];
      total += price * quantity;
    }
  
    return total;
  }

}//Class
