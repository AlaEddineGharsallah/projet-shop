import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cartUrl="http://localhost:3000";

  constructor(private httpClient:HttpClient) { }
addToCart(cartItem:any){
  return this.httpClient.post(`${this.cartUrl}/api/addToCart`,cartItem);
}
}


