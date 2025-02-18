import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ComputersService } from 'src/app/service/computers.service';
import { PhonesService } from 'src/app/service/phones.service';
import { UserService } from 'src/app/service/user.service';
import { EditUserComponent } from '../../edit-user/edit-user.component';
import { DisplayPhoneComponent } from '../../phones/display-phone/display-phone.component';
import { AddComputerComponent } from '../add-computer/add-computer.component';
import { AddPhoneComponent } from '../add-phone/add-phone.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
phones:any =[];
users:any =[];
phone:any;
computers:any =[];
constructor(
  private router: Router,
  public dialog: MatDialog,
  private usersService : UserService,
  private phonesService: PhonesService,
  private activatedRoute : ActivatedRoute,
  private computersService: ComputersService
) {}

ngOnInit(): void {
  this.getPhones();
  this.getComputers(); 
  this.getUsers(); 

}

//! Phones

//? Get all phones from DB
getPhones() {
  this.phonesService.getAllPhones().subscribe((data) => {
    this.phones = data.phones;
    this.phones.sort(function(a, b){
      return a.brand < b.brand?-1:1;
  });
  });
}

openDialogPhone(){
  this.dialog.open(AddPhoneComponent);
}


displayPhones(phone:any) {
    this.dialog.open(DisplayPhoneComponent);
    localStorage.setItem('phoneToBeDisplayed',JSON.stringify(phone));
}

editPhones(id: string) {
  this.dialog.open(AddPhoneComponent,{data:id});

 
}

deletePhones(id: string) {
  console.log(id);
  this.phonesService.deletePhones(id).subscribe((data) => {
    console.log(data.message);
    this.getPhones();
  });
}

//! Computers

//? Get all computers from DB
getComputers() {
  this.computersService.getComputers().subscribe((data) => {
    this.computers = data.computers;
    this.computers.sort(function(a, b){
      return a.brand < b.brand?-1:1;
  });
      });
}

openDialogComputer(){
  this.dialog.open(AddComputerComponent);
}

displayComputers(computer : any) {
  this.dialog.open(DisplayPhoneComponent);
  localStorage.setItem('computerToBeDisplayed',JSON.stringify(computer));
}

editComputers(id: string) {
  this.dialog.open(AddComputerComponent,{data:id});
}

deleteComputers(id: string) {
  this.computersService.deleteComputers(id).subscribe(() => {
    this.getComputers();
  });
}

//! Users

//? Get all users from DB
getUsers() {
  this.usersService.getAllUsers().subscribe((data) => {
    this.users = data.users;
    this.users.sort(function(a, b){
      return a.firstName < b.firstName?-1:1;
  });
      });
}

editUsers(id: string) {
  this.dialog.open(EditUserComponent,{data:id});
}

deleteUsers(id: string) {
  this.usersService.deleteUsers(id).subscribe(() => {
    this.getUsers();
  });
}

}