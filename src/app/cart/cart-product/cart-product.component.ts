import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartItem} from '../../models/cartItem.model';
import {Product} from '../../models/product.model';
import {MatSelectChange} from '@angular/material/select';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.less']
})
export class CartProductComponent implements OnInit {
  @Input() cartItem: CartItem;
  @Output() changeAmount: EventEmitter<number>;
  @Output() productToRemove: EventEmitter<Product>;
  limitOptions: number[];

  constructor() {
    this.changeAmount = new EventEmitter<number>();
    this.productToRemove = new EventEmitter<Product>();
  }

  ngOnInit() {
    this.limitOptions = [...Array(this.cartItem.product.limit).keys()].map(x => x + 1);
  }

  removeProduct() {
    this.productToRemove.emit(this.cartItem.product);
  }

  changeLimit(productAmount: number) {
    console.log(productAmount);
    this.changeAmount.emit(productAmount);
   }

  unlimitedProductAmount() {
    this.changeAmount.emit(this.cartItem.amount);
  }
}
