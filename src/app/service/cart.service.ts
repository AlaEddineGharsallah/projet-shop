import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartUrl = "http://localhost:3000"
  constructor(private httpClient:HttpClient) { }
  getAll(id:string){
    return this.httpClient.get(`${this.cartUrl}/api/getProduct/${id}`);

  }
  addCart(item:any){
    return this.httpClient.post(`${this.cartUrl}/api/addCartItem`,item);
  }

}