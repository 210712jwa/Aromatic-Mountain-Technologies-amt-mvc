import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageComponent } from './account-page/account-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/product/product.component';

const routes: Routes = [
  { path: '', component: LoginFormComponent},
  { path: 'account', component: AccountPageComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'cart', component: CartComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
