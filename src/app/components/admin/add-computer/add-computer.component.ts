import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ComputersService } from 'src/app/service/computers.service';
import { PhonesService } from 'src/app/service/phones.service';

@Component({
  selector: 'app-add-computer',
  templateUrl: './add-computer.component.html',
  styleUrls: ['./add-computer.component.css']
})
export class AddComputerComponent implements OnInit {
  addComputerForm: FormGroup;
  imagePreview:any;
    constructor(
    private formBuilder: FormBuilder,
    private computerService: ComputersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.addComputerForm = this.formBuilder.group({
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

  addComputer(computer:any) {
    console.log('Here my PC object',computer);
    this.computerService.addComputer(computer,this.addComputerForm.value.image).subscribe(
      () => {
      console.log('computer added successfully');
    });
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.addComputerForm.patchValue({ image: file });
    this.addComputerForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }
}
