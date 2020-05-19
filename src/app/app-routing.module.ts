import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';
import {ProductListComponent} from './products/product-list/product-list.component';


const routes: Routes = [
  {path: 'product-list', component: ProductListComponent},
  { path: 'products/:product-name', component: ProductDetailComponent },
  {path: '', redirectTo: '/product-list', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
