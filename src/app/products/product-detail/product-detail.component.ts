import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../interfaces/product-interface';
import {ProductComponent} from '../product-list/product/product.component';
import {ActivatedRoute, convertToParamMap, ParamMap} from '@angular/router';
import {ProductListComponent} from '../product-list/product-list.component';
import {ProductService} from '../product.service';
import {map, switchMap} from 'rxjs/operators';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.less']
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<Product>;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit(){
    this.product$ = this.route.paramMap.pipe(switchMap((param) => this.productService.getProduct(param.get('product-name'))));
     }
}
