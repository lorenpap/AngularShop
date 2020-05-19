import {Component, OnInit} from '@angular/core';
import {CartService} from './services/cart.service';
import {ProductService} from '../products/services/product.service';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Product} from '../interfaces/product-interface';
import {CartItem} from '../interfaces/cart-interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {
  products$: Observable<Product[]>;
  cart$: Observable<Record<string, number>>;
  cartProducts$: Observable<CartItem[]>;
  totalPrice$: Observable<number>;

  constructor(private cartService: CartService, private productService: ProductService) {
  }

  ngOnInit() {
    this.products$ = this.productService.getProducts();
    this.cart$ = this.cartService.getCart();
    this.createCart();
    this.totalPrice$ = this.cartService.getCartTotalPrice();
  }

  createCart() {
    this.cartProducts$ = combineLatest(this.products$, this.cart$).pipe(map(([products, cart]: [Product[], Record<string, number>]) =>
      Object.keys(cart).map(name => ({product: products.find(elem => elem.name === name), amount: cart[name]}))));
  }

  checkout() {
    this.productService.changeLimit();
    this.cartService.checkout();
  }

  removeProduct(product: Product) {
    this.cartService.remove(product);
  }

  updateAmount(product: Product, amount: number) {
    this.cartService.updateAmount(product, amount);
  }


}

