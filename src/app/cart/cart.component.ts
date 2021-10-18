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
  
  confirmationMessage(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit(): void {
    this.viewCart();
    this.total = this.cartService.computeTotal(this.cart);
    this.toCurrency = this.productService.toCurrency;
  }

  decline(): void {
    this.modalRef?.hide();
  }

  viewCart(): void {
    this.cart = this.cartService.viewCart();
  }

  deleteProduct(index: any){
    this.modalRef?.hide();
    return this.cartService.removeProduct(index);
  }
}

