import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { PhoneDetailComponent } from './components/phones/phone-detail/phone-detail.component';
import { ShopGridComponent } from './components/shop-grid/shop-grid.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'prod/:cat/:id',component:CheckoutComponent},
  {path:'phoneDetails/:id',component:PhoneDetailComponent},
  {path:'shop-grid',component:ShopGridComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
