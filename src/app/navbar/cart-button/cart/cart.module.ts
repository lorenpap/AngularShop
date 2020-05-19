import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from './cart.component';
import {CartProductComponent} from './cart-product/cart-product.component';
import {CartService} from './services/cart.service';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  providers: [
    CartService
  ],
  declarations: [
    CartComponent,
    CartProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule
  ]

})
export class CartModule {
}
