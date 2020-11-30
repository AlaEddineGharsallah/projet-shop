import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PhonesService } from 'src/app/service/phones.service';

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css']
})
export class AddPhoneComponent implements OnInit {
  addPhoneForm: FormGroup;
  imagePreview:any;
  constructor(
    private formBuilder: FormBuilder,
    private phoneService: PhonesService,
    private router: Router
  ) {}

  ngOnInit() {
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
  }

  addPhone(phone:any) {
    console.log('Here my player object',phone);
    this.phoneService.addPhone(phone,this.addPhoneForm.value.image).subscribe(
      () => {
      console.log('phone added successfully');
    });
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
