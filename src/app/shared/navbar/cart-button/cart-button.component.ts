import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../cart/services/cart.service';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.less']
})
export class CartButtonComponent {
  cartAmount: number;
  constructor(private cartService: CartService) {
    this.getCartAmount();
  }

  getCartAmount() {
    this.cartService.getCartAmount().subscribe(amount => this.cartAmount = amount);
  }

}
