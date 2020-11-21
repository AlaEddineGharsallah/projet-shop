import { Component, OnInit } from '@angular/core';
import { PhonesService } from 'src/app/service/phones.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
marques:any;
  phones: any=[];
  filtredPhones: any = [];
  constructor(
    private phoneService: PhonesService) { }

  ngOnInit(): void {
    this.phoneService.getAllPhones().subscribe(
      data => {
        this.phones = data;
        this.getMarques();
        console.log(this.marques);
         
        this.getPhonesByType('Xiaomi');
        
      }
    );
  }

  //* Fonction d'extarction des produits de la base selon la marque
  getPhonesByType(type: String) {
    this.filtredPhones = this.phones.filter(phone => phone.marque === type);
    return this.filtredPhones;
    
  }

  getMarques() {
    this.marques= [...new Map(this.phones.map(item=> [item.marque,item.marque])).values()];
  }
}

