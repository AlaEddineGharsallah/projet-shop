import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhonesService } from 'src/app/service/phones.service';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css']
})
export class PhoneDetailComponent implements OnInit {
id:string;
phone:any={};
  constructor(
    private activatedRoute : ActivatedRoute,
    private phoneService:PhonesService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.phoneService.getPhoneBYId(this.id).subscribe(
      data=>{
        this.phone=data 
      }
    )
    
  }
  close(){
    this.router.navigate(['']);  }

}
