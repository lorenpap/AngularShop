import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Product} from '../../models/product.model';
import {map, tap} from 'rxjs/operators';
import {CartItem} from '../../models/cartItem.model';
// @ts-ignore
import {Cart} from '../../models/cart.model';

@Injectable()
export class CartService {
  cart$: BehaviorSubject<Cart>;

  constructor() {
    this.cart$ = new BehaviorSubject({});
  }

  add(productName: string) {
    const cart = this.cart$.getValue();
    cart[productName] = 1;
    this.cart$.next(cart);

  }

  remove(productName: string) {
    const cart = this.cart$.getValue();
    delete cart[productName];
    this.cart$.next(cart);
  }

  updateAmount(productName: string, amount: number) {
    const cart = this.cart$.getValue();
    cart[productName] = Number(amount);
    this.cart$.next(cart);
  }

  checkout() {
    this.cart$.next({});
  }

  getCartAmount(): Observable<number> {
    return this.cart$.pipe(map((cart) => Object.keys(cart).length));
  }

  getCart(): Observable<Cart> {
    return this.cart$.asObservable();
  }

  getCartTotalPrice$(cartProducts$: Observable<CartItem[]>): Observable<number> {
    return cartProducts$.pipe(map(cartItems =>
      cartItems.reduce((acc, currentProduct) => acc + currentProduct.amount * currentProduct.product.price, 0)));
  }


  getProductAmount(product: Product): number {
    const cart = this.cart$.getValue();
    return cart[product.name];
  }

}
