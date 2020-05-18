import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Product} from '../../../interfaces/product-interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: BehaviorSubject<Record<string, number>>;
  totalPrice: BehaviorSubject<number>;
  productsAmount: BehaviorSubject<number>;

  constructor() {
    this.cart = new BehaviorSubject({});
    this.totalPrice = new BehaviorSubject(0);
    this.productsAmount = new BehaviorSubject(0);
  }

  add(product: Product) {
    const cart = this.cart.getValue();
    if (cart[product.name] > 0) {
      const newAmount = cart[product.name] + 1;
      this.update(product, newAmount);
    } else {
      cart[product.name] = 1;
      this.cart.next(cart);
      const total = this.totalPrice.getValue() + product.price;
      this.totalPrice.next(total);
      const amount = this.productsAmount.getValue() + 1;
      this.productsAmount.next(amount);
    }
  }

  remove(product: Product) {
    const cart = this.cart.getValue();
    let total = this.totalPrice.getValue();
    total -= product.price * cart[product.name];
    this.totalPrice.next(total);
    delete cart[product.name];
    this.cart.next(cart);
    const amount = this.productsAmount.getValue() - 1;
    this.productsAmount.next(amount);
  }

  update(product: Product, num: number) {
    const cart = this.cart.getValue();
    let total = this.totalPrice.getValue();
    total -= product.price * (cart[product.name] - num);
    this.totalPrice.next(total);
    cart[product.name] = Number(num);
    this.cart.next(cart);
  }

  checkout() {
    this.totalPrice.next(0);
    this.cart.next({});
    this.productsAmount.next(0);
   }

  printCart() {
    const cart = this.cart.getValue();
    const amount = this.productsAmount.getValue();
    console.log(cart);
    console.log(amount);
  }

  getCartAmount(): Observable<number> {
    return this.productsAmount;
  }

  getCart(): BehaviorSubject<Record<string, number>> {
    return this.cart;
  }

  getCartTotalPrice(): BehaviorSubject<number>{
    return this.totalPrice;
  }

  getProductAmount(product: Product): number{
    const cart = this.cart.getValue();
    return cart[product.name];
  }

}
