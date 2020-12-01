import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComputersService {

  computersUrl = "http://localhost:3000";
  constructor(private httpClient: HttpClient) { }

  getComputers(): Observable<any> {
    return this.httpClient.get<{computers:any,message:string}>(`${this.computersUrl}/api/computers`);
  }

  getComputerById(id: String) {
    return this.httpClient.get(`${this.computersUrl}/${id}`);
  }
  addComputer(computer:any,image:File){
    const fromData=new FormData;
    fromData.append('brand',computer.brand);
    fromData.append('model',computer.model);
    fromData.append('ref',computer.ref);
    fromData.append('price',computer.price);
    fromData.append('dateEndSaleos',computer.dateEndSaleos);
    fromData.append('os',computer.os);
    fromData.append('size',computer.size);
    fromData.append('cpu',computer.cpu);
    fromData.append('ram',computer.ram);
    fromData.append('rom',computer.rom);
    fromData.append('waranty',computer.waranty);
    fromData.append('status',computer.status);
    fromData.append('stock',computer.stock);
    fromData.append('color',computer.color);
    fromData.append('frontCam',computer.frontCam);
    fromData.append('backCam',computer.backCam);
    fromData.append('fingerPrint',computer.fingerPrint);
    fromData.append('sim',computer.sim);
    fromData.append('battery',computer.battery);
    fromData.append('faceId',computer.faceId);
    fromData.append('image',computer.image);
    return this.httpClient.post(`${this.computersUrl}/api/addComputer`,fromData);
  }
}

