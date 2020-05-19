import {Component, OnInit} from '@angular/core';
import {Product} from 'src/app/interfaces/product-interface';
import {ProductService} from 'src/app/products/services/product.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {CartService} from '../../navbar/cart-button/cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private productService: ProductService, private cartService: CartService) {
  }

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }

  isInCart(product: Product): boolean {
    return !!this.cartService.getProductAmount(product);
  }

  removeFromCart(currentProduct: Product) {
    this.cartService.remove(currentProduct);
  }

  addToCart(currentProduct: Product) {
    this.cartService.add(currentProduct);
  }
}




