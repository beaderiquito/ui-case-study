import { Component, OnInit, TemplateRef } from '@angular/core';
import { CartService } from '../services/cart.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';

/* NgRx */
import { createAction, Store } from '@ngrx/store';
import { Product } from '../Product';
import { AppState } from '../store/app-state';
import { AddItemAction, DeleteItemAction } from '../store/cart.actions';


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

  /* NgRx */
  cartItems!: Observable<Product[]>

      constructor(
        private cartService:CartService, 
        private modalService: BsModalService, 
        private productService: ProductService,

        /* NgRx */
        private store: Store<AppState>,
      ) { }

      ngOnInit(): void {
        this.viewCart();
        this.toCurrency = this.productService.toCurrency;

        /* NgRx */
        this.cartItems = this.store.select(store => store.cart); //cart from store class
      }

      /*Pop up modal*/
      confirmationMessage(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
      }
      
      /*Get updated items of cart*/
      viewCart(): void {
        this.cart = this.cartService.viewCart();
        this.total = this.cartService.total;
      }

      /*User confirms to delete a product*/
      deleteProduct(index: any){
        this.modalRef?.hide();
        this.cartService.removeProduct(index);
        this.viewCart();

        /* NgRx */
        this.store.dispatch(new DeleteItemAction(this.productService.getProductById(index)));
      }

      /*User declines to delete a product*/
      decline(): void {
        this.modalRef?.hide();
      }

  }//CartComponent

