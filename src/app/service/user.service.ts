import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {}

  //? Get all objects
  getAllUsers() {
    return this.httpClient.get<{message:string,users:any}>(`${this.userUrl}/api/myUsers`);
  }

  //? Get one object
  getUserById(id: String) {
    return this.httpClient.get<{user:any}>(`${this.userUrl}/api/getUser/${id}`);
  }

  //? Edit Object
  editUser(user: any) {
    return this.httpClient.put(`${this.userUrl}/api/editUser/${user._id}`, user);
  }

  //? Delete Object by ID
  deleteUsers(id: string) {
    return this.httpClient.delete(`${this.userUrl}/api/deleteUser/${id}`);
  }
  
  signupUser(user: any, avatar:File) {
      let formData= new FormData();
      formData.append('firstName',user.firstName);
      formData.append('lastName',user.lastName);
      formData.append('email',user.email);
      formData.append('pwd',user.pwd);
      formData.append('tel',user.tel);
      formData.append('avatar',avatar);
    return this.httpClient.post<{message:string}>(`${this.userUrl}/api/signupUser`, formData);
  }

  loginUser(user:any){
    return this.httpClient.post<{message:string,user:any}>(`${this.userUrl}/api/login`,user);
  }
}
