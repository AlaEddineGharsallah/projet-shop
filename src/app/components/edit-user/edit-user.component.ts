import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: any;
  id: any;
  editUserForm: FormGroup;
  avatar:any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  ngOnInit(): void {
    this.userService.getUserById(this.data).subscribe((data) => {
      this.user = data.user;
      this.avatar=data.user.avatar;
      console.log(this.user);
      
    });
    
  }

  validateEditUser() {
    this.userService.editUser(this.user).subscribe(() => {
      this.router.navigate(['admin']);
    });
  }
}
