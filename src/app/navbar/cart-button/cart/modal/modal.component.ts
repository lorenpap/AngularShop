import {Component, OnInit} from '@angular/core';
import {CartService} from '../cart.service';
import {ProductService} from '../../../../products/product.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Product} from '../../../../interfaces/product-interface';
import {Cart} from '../../../../interfaces/cart-interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {
  products: BehaviorSubject<Product[]>;
  cart: BehaviorSubject<Record<string, number>>;
  cartProducts: Observable<Cart[]>;
  totalPrice: BehaviorSubject<number>;

  constructor(private cartService: CartService, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.cart = this.cartService.getCart();
    this.createCart();
    this.totalPrice = this.cartService.getCartTotalPrice();
  }

  createCart() {
    console.log(this.products.getValue());
    const products = this.products.getValue();
    this.cartProducts = this.cart.pipe(
      map((cart: Record<string, number>) =>
        Object.keys(cart).map(name => ({
          product: products.find(p =>
            p.name === name), amount: cart[name]
        }))));
  }

  checkout() {
    this.productService.changeLimit();
    this.cartService.checkout();
  }

  removeProduct(product: Product) {
    this.cartService.remove(product);
  }

  updateAmount(product: Product, amount: number) {
    this.cartService.update(product, amount);
  }


}

