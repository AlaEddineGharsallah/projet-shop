import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComputersService {

  computersUrl = "http://localhost:3000";
  constructor(private httpClient: HttpClient) { }

  getComputers() {
    return this.httpClient.get<{ computers: any, message: string }>(`${this.computersUrl}/api/computers`);
  }

  getComputerById(id: String) {
    return this.httpClient.get<{computer:any,message:string}>(`${this.computersUrl}/api/getComputer/${id}`);
  }

  addComputer(computer: any, image: File) {
    const fromData = new FormData;
    fromData.append('brand', computer.brand);
    fromData.append('model', computer.model);
    fromData.append('ref', computer.ref);
    fromData.append('price', computer.price);
    fromData.append('dateEndSaleos', computer.dateEndSaleos);
    fromData.append('os', computer.os);
    fromData.append('size', computer.size);
    fromData.append('cpu', computer.cpu);
    fromData.append('gpu', computer.gpu);
    fromData.append('ram', computer.ram);
    fromData.append('rom', computer.rom);
    fromData.append('waranty', computer.waranty);
    fromData.append('status', computer.status);
    fromData.append('stock', computer.stock);
    fromData.append('options', computer.options);
    fromData.append('color', computer.color);
    fromData.append('image', image);
    return this.httpClient.post(`${this.computersUrl}/api/addComputer`, fromData);
  }

  //? Delete Computer by ID
  deleteComputers(id: string) {
    return this.httpClient.delete(`${this.computersUrl}/api/deleteComputer/${id}`);
  }

  //? Edit Computer
  editComputers(computer: any) {
    return this.httpClient.put(`${this.computersUrl}/api/editComputer/${computer._id}`, computer);
  }

}

