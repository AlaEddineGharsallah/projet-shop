import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartUrl = "http://localhost:3000"
  constructor(private httpClient:HttpClient) { }
  getAllCart(id:string){
    return this.httpClient.get<{cart:any,message:string}>(`${this.cartUrl}/api/getCart/${id}`);

  }
  addCart(item:any){
    return this.httpClient.post(`${this.cartUrl}/api/addCartItem`,item);
  }

}