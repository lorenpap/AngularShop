import {Component, OnInit} from '@angular/core';
import {CartService} from './cart/cart.service';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.less']
})
export class CartButtonComponent implements OnInit {
  cartAmount;
  constructor(private cartService: CartService) {
    this.getCartAmount();
  }

  ngOnInit(): void {
  }

  getCartAmount() {
    this.cartService.getCartAmount().subscribe(amount => this.cartAmount = amount);
  }

}
