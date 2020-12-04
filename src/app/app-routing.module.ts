import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPhoneComponent } from './components/admin/add-phone/add-phone.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ShopGridPhonesComponent } from './components/phones/shop-grid-phones/shop-grid-phones.component';
import { ShopGridComputersComponent } from './components/shop-grid-computers/shop-grid-computers.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'prod/:cat/:id', component: CheckoutComponent },
  { path: 'shop-grid-phones', component: ShopGridPhonesComponent },
  { path: 'shop-grid-computers', component: ShopGridComputersComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
