import { Component, OnInit } from '@angular/core';
import { ComputersService } from 'src/app/service/computers.service';
import { PhonesService } from 'src/app/service/phones.service';

@Component({
  selector: 'app-shop-grid-computers',
  templateUrl: './shop-grid-computers.component.html',
  styleUrls: ['./shop-grid-computers.component.css']
})
export class ShopGridComputersComponent implements OnInit {
  brandsComputers: any;
  computers: any = [];
  filtredComputers: any = [];
 

  constructor(
    private computerService: ComputersService) { }

  ngOnInit(): void {
    this.computerService.getComputers().subscribe(
      (data) => {
        this.computers = data.computers;
        console.log('all computers', this.computers);
        this.getBrandsComputers();
        console.log("Computers brands", this.brandsComputers);
        this.getComputersByType(this.brandsComputers[0]);
      }
    );
  }

  //* Get computers by type
  getComputersByType(type: string) {
    this.filtredComputers = this.computers.filter(computer =>
      (computer.brand === type));
    console.log("Filtred computers", this.filtredComputers);
    return this.filtredComputers;
  }

  //* Get all brands of computers
  getBrandsComputers() {
    this.brandsComputers = [...new Map(this.computers.map(item => [item.brand, item.brand])).values()];
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
    if (Number(this.filtre) > 1 && Number(this.filtre) < 65) {
      this.filtreSub = 'ram';
    }
    else if (Number(this.filtre) > 249 && Number(this.filtre) < 4001) {
      this.filtreSub = 'rom';
    } else {
      this.filtreSub = 'cpu';
    }
  }

  getComputersByBrand(brand:any){
    this.filtreSub = 'brand';
    this.filtreParam = brand;
  }

}
