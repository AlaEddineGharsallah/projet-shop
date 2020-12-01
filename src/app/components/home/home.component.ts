import { Component, OnInit } from '@angular/core';
import { PhonesService } from 'src/app/service/phones.service';
import { ActivatedRoute } from '@angular/router';
import { ComputersService } from 'src/app/service/computers.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  brandsPhones: any;
  phones: any = [];
  filtredPhones: any = [];
  brandsComputers: any;
  computers: any = [];
  filtredComputers: any = [];
 
  constructor(
    private phoneService: PhonesService,
    private computerService : ComputersService) { }

  ngOnInit(): void {
    this.phoneService.getAllPhones().subscribe(
      (data) => {
        this.phones = data.phones;
        console.log('all phones', this.phones);
        this.getBrandsPhones();
        console.log("Phones brands",this.brandsPhones);
        this.getPhonesByType(this.brandsPhones[0]);
      }
    );

    this.computerService.getComputers().subscribe(
      (data) => {
        this.computers = data.computers;
        console.log('all computers', this.computers);
        this.getBrandsComputers();
        console.log("Computers brands",this.brandsComputers);
        this.getComputersByType(this.brandsComputers[0]);
      }
    );
  }

  //* Get phones by type
  getPhonesByType(type: string) {
    this.filtredPhones = this.phones.filter(phone =>
      (phone.brand === type));
    console.log("Filtred phones",this.filtredPhones);
    return this.filtredPhones;
  }

  //* Get all brands of phones
  getBrandsPhones() {
    this.brandsPhones = [...new Map(this.phones.map(item => [item.brand, item.brand])).values()];
  }

  //* Get computers by type
  getComputersByType(type: string) {
    this.filtredComputers = this.computers.filter(computer =>
      (computer.brand === type));
    console.log("Filtred computers",this.filtredComputers);
    return this.filtredComputers;
  }

  //* Get all brands of computers
  getBrandsComputers() {
    this.brandsComputers = [...new Map(this.computers.map(item => [item.brand, item.brand])).values()];
  }
}

