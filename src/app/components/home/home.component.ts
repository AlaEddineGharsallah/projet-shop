import { Component, OnInit } from '@angular/core';
import { PhonesService } from 'src/app/service/phones.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  brands: any;
  phones: any = [];
  filtredPhones: any = [];
  filtredPhonesEtat: any = [];

  constructor(
    private phoneService: PhonesService) { }

  ngOnInit(): void {
    this.phoneService.getAllPhones().subscribe(
      (data) => {
        this.phones = data.phones;
        console.log('dddd', this.phones);

        this.getMarques();
        console.log(this.brands);
        this.getPhonesByType(this.brands[0]);

      }
    );
  }

  getPhonesByType(type: string) {
    this.filtredPhones = this.phones.filter(phone =>
      (phone.brand === type));
 
    console.log(this.filtredPhones);

    return this.filtredPhones;

  }

  getMarques() {
    this.brands = [...new Map(this.phones.map(item => [item.brand, item.brand])).values()];
  }
}

