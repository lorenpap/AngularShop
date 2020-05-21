import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {CartButtonComponent} from './navbar/cart-button/cart-button.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AccountMenuComponent} from './navbar/account-menu/account-menu.component';
import {MatMenuModule} from '@angular/material/menu';
import {ProductsModule} from '../products/products.module';


@NgModule({
  declarations: [
    CartButtonComponent,
    NavbarComponent,
    AccountMenuComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatMenuModule,
    ProductsModule
  ],
  exports: [
    NavbarComponent]
})
export class SharedModule {
}
