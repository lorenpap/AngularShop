import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Product} from '../../models/product.model';
import {CartService} from '../../cart/services/cart.service';
import {map} from 'rxjs/operators';

@Injectable()

export class ProductService {
  private products$ = new BehaviorSubject([]);

  constructor(private http: HttpClient, private cartService: CartService) {
    this.http.get<Product[]>('../assets/products-json/products.json').subscribe(product => this.products$.next(product));
  }

  getProducts(): BehaviorSubject<Product[]>{
    return this.products$;
  }

  getProduct(productName: string): Observable<Product> {
    return this.products$.asObservable().pipe(
      map(products =>
        products.find(product =>
          product.name === productName)
      )
    );
  }

  changeLimit() {
    const currentProducts = this.products$.getValue();
    currentProducts.forEach((product) => {
      if (product.limit !== undefined && this.cartService.getProductAmount(product) !== undefined) {
        product.limit -= this.cartService.getProductAmount(product);
      }
    });
  }
}


