import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  avatarPreview:any;
  message:string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService:UserService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: ['', [Validators.email, Validators.required]],
      pwd: ['', [Validators.minLength(8), Validators.maxLength(8)]],
      confirmPwd: [''],
      tel: [''],
      avatar:['']
    });
  }

   signup(user: any) {
    console.log('This is my user', user);
    let secondPart = user.email.substring(user.email.indexOf("@"),user.email.length);
    user.role = (secondPart==="@admin.com")?'admin':'user';
    this.userService.signupUser(user,this.signupForm.value.avatar).subscribe((data) => {
      console.log('User added successfully',user);
      if (data.message==='User validation failed'){this.message='user exists'}
      else{
        this.router.navigate(['admin']);
      }
      
    });
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ avatar: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.avatarPreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }

}
