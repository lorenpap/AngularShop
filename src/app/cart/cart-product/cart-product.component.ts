import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartItem} from '../../interfaces/cart-interface';
import {Product} from '../../interfaces/product-interface';

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

  changeLimit(limit: number) {
    this.changeAmount.emit(limit);
  }

  unlimitedProductAmount() {
    this.changeAmount.emit(this.cartItem.amount);
  }
}
