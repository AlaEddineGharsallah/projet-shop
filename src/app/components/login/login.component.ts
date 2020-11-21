import { Component, OnInit } from  '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageComponent } from '../message/message.component';

// .. other imports

@Component({
// component metadata
})
export  class  LoginComponent{

    public  email:  string  =  "";
    public  password:  string  =  "";


    constructor(private  dialog:  MatDialog, private  router:  Router) { }
    login(){
        if(this.email  ===  "email@email.com"  &&  this.password  === "p@ssw0rd")
        {
            this.router.navigate(['success']);
        }
        else
        {
            this.dialog.open(MessageComponent,{ data: {
            message:  "Error!!!"
            }});
        }
    }
}