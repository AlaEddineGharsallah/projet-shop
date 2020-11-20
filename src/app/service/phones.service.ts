import { HttpClient,HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhonesService {
phonesUrl ="api/phones";
  constructor(private httpClient :HttpClient) { }
  getAllPhones(){
    return this.httpClient.get(this.phonesUrl);
  }
}
