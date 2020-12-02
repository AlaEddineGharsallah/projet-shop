import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ComputersService } from 'src/app/service/computers.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-computer',
  templateUrl: './add-computer.component.html',
  styleUrls: ['./add-computer.component.css']
})
export class AddComputerComponent implements OnInit {
  addComputerForm: FormGroup;
  imagePreview: any;
  computer:any;
  constructor(
    private formBuilder: FormBuilder,
    private computerService: ComputersService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
        
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    
    if (!this.data) {
      this.computer={};
      this.addComputerForm = this.formBuilder.group({
        brand: [''],
        model: [''],
        ref: [''],
        price: [''],
        dateEndSale: [''],
        os: [''],
        size: [''],
        cpu: [''],
        gpu: [''],
        ram: [''],
        rom: [''],
        waranty: [''],
        status: [''],
        stock: [''],
        options: [''],
        color: [''],
        image: ['']
      });
    }else{
      this.computerService.getComputerById(this.data).subscribe(data=>{
        this.computer=data.computer;
      })
    }
    
  }

  addComputer() {
    if (!this.data) {
      console.log('Here my PC object', this.computer);
      this.computerService.addComputer(this.computer, this.addComputerForm.value.image).subscribe(
        () => {
          console.log('computer added successfully');
        });
    }else{
      this.computerService.editComputers(this.computer).subscribe(()=>{
        console.log('computer edited!!');
        
      })
    }
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
