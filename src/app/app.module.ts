import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {ProductsModule} from './products/products.module';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    ProductsModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [MatDialog],
  bootstrap: [AppComponent],
  exports: [
    AppComponent,
    AppRoutingModule
  ]
})
export class AppModule {
}
