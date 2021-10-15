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
          
          if (productID != this.myCart[i][0] && this.myCart.length-1 == i){
            this.myCart.push([productID,productName,productPrice,this.productQuantity, productPhoto]);
            alert('Product added!');
            break;
          }//if cart has no item
         
        }//forloop
      }//If cart has an item
     else{
        this.myCart.push([productID,productName,productPrice,this.productQuantity, productPhoto]);
        alert('Product added!');
      }//if cart has no item
    
  }//add to cart

  removeProduct(productID: any){
    if (this.myCart.length>0){
      for(let i=0; i<=this.myCart.length; i++){
        alert(this.myCart);
        if (productID == this.myCart[i][0]){
          this.myCart.splice(productID, 2);
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
