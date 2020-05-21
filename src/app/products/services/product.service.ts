import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Product} from '../../models/product.model';
import {CartService} from '../../cart/services/cart.service';
import {first, map} from 'rxjs/operators';

@Injectable()

export class ProductService {
  private products$ = new BehaviorSubject([]);

  constructor(private http: HttpClient, private cartService: CartService) {
    this.http.get<Product[]>('../assets/products-json/products.json').subscribe(products => this.products$.next(products));
  }

  getProducts$(): BehaviorSubject<Product[]>{
    return this.products$;
  }

  getProduct$(productName: string): Observable<Product> {
    return this.products$.pipe(
      map(products =>
        products.find(product =>
          product.name === productName)
      )
    );
  }

  changeLimit() {
    const currentProducts = this.products$.getValue();
    this.cartService.getCart$().pipe(first()).subscribe(cart => {
      currentProducts.forEach((product) => {
        if (product.limit !== undefined && cart[product.name] !== undefined) {
          product.limit -= cart[product.name];
        }
      });
      this.products$.next(currentProducts);
    });
  }
}


