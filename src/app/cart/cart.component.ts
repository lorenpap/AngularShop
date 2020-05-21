import {Component, OnInit} from '@angular/core';
import {CartService} from './services/cart.service';
import {ProductService} from '../products/services/product.service';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Product} from '../models/product.model';
import {CartItem} from '../models/cartItem.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {
  cartProducts$: Observable<CartItem[]>;
  totalPrice$: Observable<number>;

  constructor(public cartService: CartService, private productService: ProductService) {
  }

  ngOnInit() {
    this.createCart();
    this.totalPrice$ = this.cartService.getCartTotalPrice$(this.cartProducts$);
  }

  createCart() {
    this.cartProducts$ = combineLatest(
      this.productService.getProducts$(),
      this.cartService.getCart$()).pipe(
      map(([products, cart]: [Product[], Record<string, number>]) =>
        Object.keys(cart).map(name => ({product: products.find(elem => elem.name === name), amount: cart[name]}))));
  }

  checkout() {
    this.productService.changeLimit();
    this.cartService.checkout();
  }

  removeProduct(productName: string) {
    this.cartService.remove(productName);
  }

  updateAmount(productName: string, amount: number) {
    this.cartService.updateAmount(productName, amount);
  }


}

