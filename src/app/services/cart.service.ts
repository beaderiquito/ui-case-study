import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

productQuantity = 1;
myCart: any[][] = [];

  addToCart(productID: number, productName: string, productPrice: number, productPhoto: string){

      alert('Product' + productID);
      console.log(productID);
      console.log(productName);
      console.log(productPrice);
      console.log(productPhoto);
      if (this.myCart.length>0){
        for(let i=0; i<=this.myCart.length; i++){
          if (productID == this.myCart[i][0]){
            this.myCart[i][2] += productPrice;
            this.myCart[i][3] += 1;
           
    
                if (i==this.myCart.length && productID != this.myCart[i][0]) {
                  this.myCart.push([productID,productName,productPrice,this.productQuantity, productPhoto]);
                  
                  alert('New Product Added!');
                }//Add to cart
           }//Update product price and quantity
        }//for
      }//If cart has an item
      else {
        this.myCart.push([productID,productName,productPrice,this.productQuantity, productPhoto]);
        alert('Product added!');
      }//if cart has no item
  
  }//add to cart

  removeProduct(productID: any){
    if (this.myCart.length>0){
      for(let i=0; i<=this.myCart.length; i++){
        if (productID == this.myCart[i][0]){
          this.myCart.splice(productID, 1);
          alert('Product removed!');
          alert(this.myCart);
      }//for
      }//if
    }//if
  }//removeProduct

    
  viewCart(): any[] {
    return this.myCart;
  }

}//Class
