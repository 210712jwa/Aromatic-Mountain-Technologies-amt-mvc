import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AppRoutingModule } from './app-routing.module';
import { AccountPageComponent } from './account-page/account-page.component';

import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/product/product.component';
import { FilterPipe } from './shared/filter.pipe';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    AccountPageComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    FilterPipe,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
