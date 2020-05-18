import {Component, OnInit} from '@angular/core';
import {Product} from 'src/app/interfaces/product-interface';
import {ProductService} from 'src/app/products/product.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {CartService} from '../../navbar/cart-button/cart/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  products: BehaviorSubject<Product[]>;

  constructor(private productService: ProductService, private cartService: CartService) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  IsInCart(product: Product) {
    return this.cartService.getProductAmount(product) > 0;
  }

  removeFromCart(currentProduct: Product) {
    this.cartService.remove(currentProduct);
  }

  addToCart(currentProduct: Product) {
    this.cartService.add(currentProduct);
  }

  IsOutOfStock(product: Product) {
    return product.limit !== undefined && product.limit === 0;

  }
}




