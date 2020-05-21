import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductService} from './services/product.service';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {ProductComponent} from './product-list/product/product.component';
import {CartModule} from '../cart/cart.module';
import {AppRoutingModule} from '../app-routing.module';


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
