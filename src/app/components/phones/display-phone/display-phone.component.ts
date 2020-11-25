import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-display-phone',
  templateUrl: './display-phone.component.html',
  styleUrls: ['./display-phone.component.css']
})
export class DisplayPhoneComponent implements OnInit {
  phone: any = {};
  constructor(@Inject(MAT_DIALOG_DATA) public id: any) { }

  ngOnInit(): void {
    this.phone=JSON.parse(localStorage.getItem("phoneTobeDisplayed"));
    console.log("identifiant", this.phone.id);

  }

}

