import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CartButtonComponent} from './navbar/cart-button/cart-button.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {ProductsModule} from './products/products.module';
import {NavbarComponent} from './navbar/navbar.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { AccountMenuComponent } from './navbar/account-menu/account-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    CartButtonComponent,
    NavbarComponent,
    AccountMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    ProductsModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
  ],
  providers: [MatDialog],
  bootstrap: [AppComponent],
  exports: [
    AppComponent
  ]
})
export class AppModule {
}
