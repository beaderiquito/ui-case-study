import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
  {path: '', component: ProductListComponent, pathMatch: 'full'},
  {path: 'products', component: ProductListComponent},
  {path: 'products/:searchTerm', component: ProductListComponent},
  {path: 'products/product-details/:product-id', component: ProductDetailComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
