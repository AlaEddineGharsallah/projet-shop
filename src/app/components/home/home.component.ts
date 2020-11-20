import { Component, OnInit } from '@angular/core';
import { PhonesService } from 'src/app/service/phones.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  phones: any;
  constructor(private phoneService: PhonesService) { }

  ngOnInit(): void {
    this.phoneService.getAllPhones().subscribe(
      data => {
        this.phones = data;
      }
    )
  }
  //* Fonction d'extarction des produits de la base selon la marque
  showPhones(x: string) {
    let phoneShow: any = [];
    for (let i = 0; i < this.phones.length; i++) {
      if (this.phones[i].marque === x) {
        phoneShow[phoneShow.length] = this.phones[i];
      }
    }
    return phoneShow;
  }

}
