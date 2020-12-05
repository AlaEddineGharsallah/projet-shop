import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { PhonesService } from 'src/app/service/phones.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
allCarts:any;
total:number=0;
user:any
  constructor(private cartService :CartService,
              private phoneService:PhonesService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userConnected'))
    this.cartService.getAllCart(this.user._id).subscribe(data=>{
      this.allCarts=data.cart
      this.allCarts.forEach(element => {
        this.phoneService.getPhoneById(element.productId).subscribe(data=>{
          element.product=data.phone
          element.totalPrice = Number(data.phone.price) * Number(element.quantity);
          this.total = this.total + element.totalPrice;
          console.log(this.total);
          
        })
      });
      
    })

  }

}
