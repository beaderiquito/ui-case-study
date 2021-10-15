import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
  {path: '', component: ProductListComponent, pathMatch: 'full'},
  {path: 'products', component: ProductListComponent},
  {path: 'products/:searchTerm', component: ProductListComponent}, //still not working properly
  {path: 'products/product-details/:product-id', component: ProductDetailComponent},
  {path: 'cart', component: CartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
