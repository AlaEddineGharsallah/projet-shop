import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-phones',
  templateUrl: './tab-phones.component.html',
  styleUrls: ['./tab-phones.component.css']
})
export class TabPhonesComponent implements OnInit {
@Input() phone:any;
  constructor() { }

  ngOnInit(): void {
  }
  getId(id:number){
    console.log('ernhstdgrfeukjfhj',id);
    
  }
}

