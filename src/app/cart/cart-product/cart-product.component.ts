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
  @Output() remove: EventEmitter<Product>;
  limitOptions: number[];

  constructor() {
    this.changeAmount = new EventEmitter<number>();
    this.remove = new EventEmitter<Product>();
  }

  ngOnInit() {
    this.limitOptions = [...Array(this.cartItem.product.limit).keys()].map(x => x + 1);
  }

  removeProduct() {
    this.remove.emit(this.cartItem.product);
  }


  onAmountChange(productAmount: number) {
    this.changeAmount.emit(productAmount);
  }
}
