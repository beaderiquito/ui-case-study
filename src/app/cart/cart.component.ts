import { Component, OnInit, TemplateRef } from '@angular/core';
import { CartService } from '../services/cart.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  modalRef?: BsModalRef;
  cart: any[]=[];
  toCurrency: any = 0;
  total = 0;

      constructor(private cartService:CartService, private modalService: BsModalService, private productService: ProductService) { }
  
      ngOnInit(): void {
        this.viewCart();
        this.toCurrency = this.productService.toCurrency;
      }

      //**Pop up modal*/
      confirmationMessage(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
      }
      
      //**Get items of cart*//
      viewCart(): void {
        this.cart = this.cartService.viewCart();
        this.total = this.cartService.total;
      }

      //**User confirms to delete a product*/
      deleteProduct(index: any){
        this.modalRef?.hide();
        this.cartService.removeProduct(index);
        this.total = this.cartService.total;
        this.viewCart();
      }

      //**User declines to delete a product*/
      decline(): void {
        this.modalRef?.hide();
      }

  }//CartComponent

