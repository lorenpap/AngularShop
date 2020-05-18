import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../../interfaces/product-interface';
import {ProductListComponent} from '../product-list.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Input() IsInCart: boolean;
  @Output() deleteProduct = new EventEmitter<Product>();
  @Output() addProduct = new EventEmitter<Product>();
  @Input() IsOutOfStock: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  removeFromCart(product: Product) {
    this.deleteProduct.emit(product);
  }

  addToCart(product: Product) {
    this.addProduct.emit(product);
  }
}
