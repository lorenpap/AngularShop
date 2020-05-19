import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Product} from '../interfaces/product-interface';
import {CartService} from '../navbar/cart-button/cart/cart.service';

@Injectable()
export class ProductService {
  private products = new BehaviorSubject([]);

  constructor(private http: HttpClient, private cartService: CartService) {
    this.http.get<Product[]>('../assets/products-json/products.json').subscribe(a => this.products.next(a));
  }

  getProducts(): BehaviorSubject<Product[]> {
    return this.products;
  }

  getProduct(productName: string): Product {
    const products = this.products.getValue();
    return products.find(product => product.name === productName);
  }

  changeLimit() {
    const currentProducts = this.products.getValue();
    currentProducts.forEach((product) => {
      if (product.limit !== undefined && this.cartService.getProductAmount(product) !== undefined) {
        product.limit -= this.cartService.getProductAmount(product);
        console.log(product.limit);
      }
    });
    console.log(this.products.getValue());
  }
}


