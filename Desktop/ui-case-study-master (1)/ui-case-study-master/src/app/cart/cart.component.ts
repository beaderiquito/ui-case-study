import { Component, OnInit, TemplateRef } from '@angular/core';
import { CartService } from '../services/cart.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ProductService } from 'ui-case-study/src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  modalRef?: BsModalRef;
  cart: any[]=[];
  toCurrency: any;
  constructor(private cartService:CartService, private modalService: BsModalService, private productService: ProductService) { }

  ngOnInit(): void {
    this.viewCart();
    this.toCurrency = this.productService.toCurrency;
  }

  viewCart(): void {
    this.cart = this.cartService.viewCart();
  }

  confirmationMessage(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  deleteProduct(index: any){
    this.modalRef?.hide();
    return this.cartService.removeProduct(index);
  }

  decline(): void {
    this.modalRef?.hide();
  }
  


}

