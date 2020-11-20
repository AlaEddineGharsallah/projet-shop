import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
cat:any;
id:any;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
this.cat=this.activatedRoute.snapshot.paramMap.get('cat');
this.id=this.activatedRoute.snapshot.paramMap.get('id');
  }

}
