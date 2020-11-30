import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhonesService {

  phonesUrl = "http://localhost:3000";
  constructor(private httpClient: HttpClient) { }

  getAllPhones(): Observable<any> {
    return this.httpClient.get<{phones:any,message:string}>(`${this.phonesUrl}/api/phones`);
  }

  getPhoneBYId(id: String) {
    return this.httpClient.get(`${this.phonesUrl}/${id}`);
  }
  addPhone(phone:any,image:File){
    const fromData=new FormData;
    fromData.append('brand',phone.brand);
    fromData.append('model',phone.model);
    fromData.append('ref',phone.ref);
    fromData.append('price',phone.price);
    fromData.append('dateEndSaleos',phone.dateEndSaleos);
    fromData.append('os',phone.os);
    fromData.append('size',phone.size);
    fromData.append('cpu',phone.cpu);
    fromData.append('ram',phone.ram);
    fromData.append('rom',phone.rom);
    fromData.append('waranty',phone.waranty);
    fromData.append('status',phone.status);
    fromData.append('stock',phone.stock);
    fromData.append('color',phone.color);
    fromData.append('frontCam',phone.frontCam);
    fromData.append('backCam',phone.backCam);
    fromData.append('fingerPrint',phone.fingerPrint);
    fromData.append('sim',phone.sim);
    fromData.append('battery',phone.battery);
    fromData.append('faceId',phone.faceId);
    fromData.append('image',phone.image);
    return this.httpClient.post(`${this.phonesUrl}/api/addPhone`,fromData);
  }
}
