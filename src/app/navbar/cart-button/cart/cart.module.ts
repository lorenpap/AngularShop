import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalComponent} from './modal/modal.component';
import {CartProductComponent} from './modal/cart-product/cart-product.component';
import {CartService} from './cart.service';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  providers: [
    CartService
  ],
  declarations: [
    ModalComponent,
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
