import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-grid',
  templateUrl: './shop-grid.component.html',
  styleUrls: ['./shop-grid.component.css']
})
export class ShopGridComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
test(a,b:string){
this.router.navigate([`prod/${a}/${b}`])
}
}
