

import { JsonPipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-display-phone',
  templateUrl: './display-phone.component.html',
  styleUrls: ['./display-phone.component.css']
})
export class DisplayPhoneComponent implements OnInit {
  phone: any = {};
  cartFrom:FormGroup;
  cart:any={};
  cartItem:any={}
  user:any;
   
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private formBuilder:FormBuilder,
  private cartService:CartService,) { }

  ngOnInit(): void {
    console.log(this.data);
    
      this.phone=this.data.object;
    console.log("identifiant", this.phone._id);
    this.cartFrom=this.formBuilder.group({
      quantity:[''],
      productId:['']
    })
    this.user=JSON.parse(localStorage.getItem('userConnected'))
  }
  addOrder(){
    console.log(this.cart);
    
    this.cart.productId = this.phone._id
    this.cart.coll='phones';
    this.cart.userId=this.user._id;
    console.log(this.cart);
    
    // this.cartItem.quantity = this.cart.quantity
    console.log('clicked!',this.cart);
    this.cartService.addCart(this.cart).subscribe(
      ()=>{
        console.log('added to cart!!!');
        location.reload();
        
      }
    )
  }
}