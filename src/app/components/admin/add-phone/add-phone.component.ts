import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PhonesService } from 'src/app/service/phones.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css']
})
export class AddPhoneComponent implements OnInit {
  phoneToAdd:any;
  addPhoneForm: FormGroup;
  imagePreview:any;
  oldImagePreview:any;
  id:any;
  phone:any;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private phoneService: PhonesService,
    private activatedRoute : ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    if (!this.data) {
      this.phoneToAdd={};
      this.addPhoneForm = this.formBuilder.group({
        brand: [''],
        model: [''],
        ref: [''],
        price: [''],
        dateEndSale: [''],
        os: [''],
        size: [''],
        cpu: [''],
        ram: [''],
        rom: [''],
        waranty: [''],
        status: [''],
        stock: [''],
        color:[''],
        frontCam: [''],
        backCam: [''],
        fingerPrint: [''],
        sim: [''],
        battery: [''],
        faceId: [''],
        image:['']
      });
  
     
    }else{
      this.phoneService.getPhoneById(this.data).subscribe(data=>{
        this.phoneToAdd=data.phone;
        this.imagePreview=this.phoneToAdd.image
      }) ; 
     }
    
  }

  addPhone() {
    if (!this.data) {
      console.log('Here my phone object',this.phoneToAdd);
      this.phoneService.addPhone(this.phoneToAdd,this.addPhoneForm.value.image).subscribe(
        () => {
        console.log('phone added successfully');
      });
    }else{
      this.phoneService.editPhones(this.phoneToAdd).subscribe(()=>{
        console.log(('phone updated !!'));
      })
    }
   
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.addPhoneForm.patchValue({ image: file });
    this.addPhoneForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }
}
