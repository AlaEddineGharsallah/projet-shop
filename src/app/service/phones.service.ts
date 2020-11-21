import { HttpClient,HttpHandler } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhonesService {

  phonesUrl ="api/phones";
  constructor(private httpClient :HttpClient) { }

  getAllPhones():Observable<any>{
    return this.httpClient.get(this.phonesUrl);
  }
  
}
