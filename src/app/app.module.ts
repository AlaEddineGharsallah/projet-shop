import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShopGridComponent } from './components/shop-grid/shop-grid.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { TabPhonesComponent } from './components/phones/tab-phones/tab-phones.component';
import { DisplayPhoneComponent } from './components/phones/display-phone/display-phone.component';
// import { InMemoryWebApiModule } from "angular-in-memory-web-api";  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from "./service/data.service";
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from "@angular/material/dialog";
import { AddPhoneComponent } from './components/admin/add-phone/add-phone.component';
import { AdminComponent } from './components/admin/admin/admin.component';
@NgModule({
  declarations: [
    
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ShopGridComponent,
    CartComponent,
    CheckoutComponent,
    TabPhonesComponent,
    DisplayPhoneComponent,
    AddPhoneComponent,
    AdminComponent,
  ],
  entryComponents:[DisplayPhoneComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    // InMemoryWebApiModule.forRoot(DataService),
    BrowserAnimationsModule, 
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
