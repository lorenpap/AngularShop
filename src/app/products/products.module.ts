import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductService} from './product.service';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {ProductComponent} from './product-list/product/product.component';
import {AppRoutingModule} from '../app-routing.module';
import {CartModule} from '../navbar/cart-button/cart/cart.module';



@NgModule({
  providers: [
    ProductService
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductComponent
  ],
  exports: [
    ProductListComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    CartModule
  ]
})
export class ProductsModule {
}
