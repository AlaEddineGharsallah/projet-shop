import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userConnected: any = {};
  loginForm: FormGroup;
  mesErr:String ='';

  constructor(private formBuiler: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuiler.group({
      email: [''],
      pwd: ['']
    });
  }

  loginUser() {
    console.log('Here my login object', this.userConnected);
    this.userService.loginUser(this.userConnected).subscribe((data) => {
      if (data.message === '2') {
        localStorage.setItem('userConnected', JSON.stringify(data.user));
        if (data.user.role === 'admin') {
          this.router.navigate(['admin']);
        } else {
          this.router.navigate(['']);
        }
      }else{
        this.mesErr="Veuillez vérifier Email/Mot de passe"
      }
    });
  }
  
}