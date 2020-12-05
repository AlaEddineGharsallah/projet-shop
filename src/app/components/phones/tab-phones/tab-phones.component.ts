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
@Input() coll:string;
showPhone:any=[];
  constructor(public dialog: MatDialog){ }
 
  ngOnInit(): void {
    
  }
  
  openDialog() {
    this.dialog.open(DisplayPhoneComponent,{data:{object:this.phone,coll:this.coll}});
    
    
  }
}

