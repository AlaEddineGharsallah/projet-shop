import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DisplayPhoneComponent } from '../display-phone/display-phone.component';


@Component({
  selector: 'app-tab-phones',
  templateUrl: './tab-phones.component.html',
  styleUrls: ['./tab-phones.component.css']
})
export class TabPhonesComponent implements OnInit {
@Input() phone:any;
showPhone:any=[];
  constructor(public dialog: MatDialog){ }
 
  ngOnInit(): void {
    
  }
  
  openDialog() {
    this.dialog.open(DisplayPhoneComponent);
    localStorage.setItem('phoneTobeDisplayed',JSON.stringify(this.phone));
   
    
  }
}

