import {Component, OnInit} from '@angular/core';
import {Product} from 'src/app/models/product.model';
import {ProductService} from 'src/app/products/services/product.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {CartService} from '../../cart/services/cart.service';
import {Cart} from '../../models/cart.model';
import {filter, first, map} from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;
  productsInCart$: Observable<Cart>
;
  constructor(private productService: ProductService, private cartService: CartService) {
  }

  ngOnInit() {
    this.products$ = this.productService.getProducts$();
    this.productsInCart$ = this.cartService.getCart$();
  }

  removeFromCart(productName: string) {
    this.cartService.remove(productName);
  }

  addToCart(productName: string) {
    this.cartService.add(productName);
  }
}




