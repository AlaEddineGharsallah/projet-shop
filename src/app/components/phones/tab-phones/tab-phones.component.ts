import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-phones',
  templateUrl: './tab-phones.component.html',
  styleUrls: ['./tab-phones.component.css']
})
export class TabPhonesComponent implements OnInit {
@Input() phone:any;
showPhone:any=[];
  constructor(private router :Router) { }

  ngOnInit(): void {
  
  }
  getId(id:string){
    console.log('ernhstdgrfeukjfhj',this.phone);
    this.router.navigate([`phoneDetails/${id}`])
  }
}

