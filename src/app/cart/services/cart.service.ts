import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Product} from '../../interfaces/product-interface';

@Injectable()

export class CartService {
  cart$: BehaviorSubject<Record<string, number>>;
  totalPrice$: BehaviorSubject<number>;
  cartAmount$: BehaviorSubject<number>;

  constructor() {
    this.cart$ = new BehaviorSubject({});
    this.totalPrice$ = new BehaviorSubject(0);
    this.cartAmount$ = new BehaviorSubject(0);
  }

  add(product: Product) {
    const cart = this.cart$.getValue();
    cart[product.name] = 1;
    this.cart$.next(cart);
    const total = this.totalPrice$.getValue() + product.price;
    this.totalPrice$.next(total);
    const amount = this.cartAmount$.getValue() + 1;
    this.cartAmount$.next(amount);

  }

  remove(product: Product) {
    const cart = this.cart$.getValue();
    let total = this.totalPrice$.getValue();
    total -= product.price * cart[product.name];
    this.totalPrice$.next(total);
    delete cart[product.name];
    this.cart$.next(cart);
    const amount = this.cartAmount$.getValue() - 1;
    this.cartAmount$.next(amount);
  }

  updateAmount(product: Product, amount: number) {
    const cart = this.cart$.getValue();
    let total = this.totalPrice$.getValue();
    total -= product.price * (cart[product.name] - amount);
    this.totalPrice$.next(total);
    cart[product.name] = Number(amount);
    this.cart$.next(cart);
  }

  checkout() {
    this.totalPrice$.next(0);
    this.cart$.next({});
    this.cartAmount$.next(0);
  }

  printCart() {
    const cart = this.cart$.getValue();
    const amount = this.cartAmount$.getValue();
    console.log(cart);
    console.log(amount);
  }

  getCartAmount(): Observable<number> {
    return this.cartAmount$;
  }

  getCart(): Observable<Record<string, number>> {
    return this.cart$;
  }

  getCartTotalPrice(): Observable<number> {
    return this.totalPrice$;
  }

  getProductAmount(product: Product): number {
    const cart = this.cart$.getValue();
    return cart[product.name];
  }

}
