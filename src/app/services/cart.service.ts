import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  

productQuantity = 1;
myCart: any[] = [];

  
  addToCart(productID: any, productName: any, productPrice: number, productPhoto: string){
      
    if (this.myCart.length>0){
      
        for(let i=0; 0<this.myCart.length;i++){
          if (productID == this.myCart[i][0]) {
                this.myCart[i][2] += productPrice;
                this.myCart[i][3] += 1;
                alert('Product updated!');
                break;
          }//Update product price and quantity
          else if (productID != this.myCart[i][0] && this.myCart.length-1 == i){
                this.myCart.push([productID,productName,productPrice,this.productQuantity, productPhoto]);
                alert('Product added!');
                break;
          }//if cart has no existing item
        
        }//loop myCartLength
      }//If cart has an item
     else{
          this.myCart.push([productID,productName,productPrice,this.productQuantity, productPhoto]);
          alert('Product added!');
      }//if cart has no item
    
  }//add to cart
  
  removeProduct(productToDelete: any){
      for(let i=0; i<this.myCart.length; i++){
          if(i == productToDelete)
        {
          this.myCart.splice(i,1);
        }
     }//for
  }//removeProduct

  viewCart(): any[] {
    return this.myCart;
  }

}//Class
