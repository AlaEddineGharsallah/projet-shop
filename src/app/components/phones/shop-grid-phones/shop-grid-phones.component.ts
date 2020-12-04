import { Component, OnInit } from '@angular/core';
import { ComputersService } from 'src/app/service/computers.service';
import { PhonesService } from 'src/app/service/phones.service';

@Component({
  selector: 'app-shop-grid-phones',
  templateUrl: './shop-grid-phones.component.html',
  styleUrls: ['./shop-grid-phones.component.css']
})
export class ShopGridPhonesComponent implements OnInit {
  brandsPhones: any;
  phones: any = [];
  filtredPhones: any = [];
  


  constructor(
    private phoneService: PhonesService) { }

  ngOnInit(): void {
    this.phoneService.getAllPhones().subscribe(
      (data) => {
        this.phones = data.phones;
        this.getBrandsPhones();
        this.getPhonesByType(this.brandsPhones[0]);
      }
    );

  }

  //* Get phones by type
  getPhonesByType(type: string) {
    this.filtredPhones = this.phones.filter(phone =>
      (phone.brand === type));
    console.log("Filtred phones", this.filtredPhones);
    return this.filtredPhones;
  }

  //* Get all brands of phones
  getBrandsPhones() {
    this.brandsPhones = [...new Map(this.phones.map(item => [item.brand, item.brand])).values()];
  }



  //* Fonctions filtre et tri

  filtre = '';
  filtreParam = '';
  SortByParam = '';
  filtreSub = '';
  sortDirection = 'asc';

  onFilter() {
    this.filtreParam = this.filtre;
  }

  onFilterClear() {
    this.filtreParam = '';
    this.filtre = '';
    this.filtreSub = '';
  }

  onSortDirection() {
    if (this.sortDirection === 'desc') {
      this.sortDirection = 'asc';
    } else {
      this.sortDirection = 'desc';
    }
  }

  getValues() {
    if (Number(this.filtre) > 1 && Number(this.filtre) < 14) {
      this.filtreSub = 'ram';
    }
    else if (Number(this.filtre) > 15 && Number(this.filtre) < 513) {
      this.filtreSub = 'rom';
    } else {
      this.filtreSub = 'cpu';
    }
  }

  getPhonesByBrand(brand:any){
    this.filtreSub = 'brand';
    this.filtreParam = brand;
  }

}
