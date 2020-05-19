import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../../interfaces/product-interface';
import {ProductListComponent} from '../product-list.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent {
  @Input() product: Product;
  @Input() isInCart: boolean;
  @Output() deleteProduct: EventEmitter<Product>;
  @Output() addProduct: EventEmitter<Product>;

  constructor() {
    this.deleteProduct = new EventEmitter<Product>();
    this.addProduct = new EventEmitter<Product>();
  }


  removeFromCart(product: Product) {
    this.deleteProduct.emit(product);
  }

  addToCart(product: Product) {
    this.addProduct.emit(product);
  }
}
