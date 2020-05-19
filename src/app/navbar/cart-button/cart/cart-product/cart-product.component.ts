import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartItem} from '../../../../interfaces/cart-interface';
import {Product} from '../../../../interfaces/product-interface';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.less']
})
export class CartProductComponent implements OnInit {
  @Input() product: CartItem;
  @Output() changeLimitedAmount = new EventEmitter<number>();
  @Output() productToRemove = new EventEmitter<Product>();
  @Output() changeUnlimitedAmount = new EventEmitter<number>();
  value: number;
  limit: number[];

  constructor() {
  }

  ngOnInit() {
    this.limit = [...Array(this.product.product.limit).keys()].map(x => x + 1);
    this.value = this.product.amount;
  }

  removeProduct() {
    this.productToRemove.emit(this.product.product);
  }

  getValue(value: number) {
    this.changeLimitedAmount.emit(value);
  }

  getInputAmount() {
    console.log(this.product.amount);
    this.changeUnlimitedAmount.emit(this.product.amount);
  }
}
