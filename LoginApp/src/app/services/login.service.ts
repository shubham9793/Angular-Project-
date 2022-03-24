import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8080"

  constructor(private http:HttpClient) { }

  //calling the server to genrate the token
  generateToken(credentials:any) {
    // token Generate
    return this.http.post(`${this.url}/token`,credentials);

  }



  // for login user
  loginuser(token:any) {
    localStorage.setItem("token",token);
    return true;
  }

  //to check user is login or not
  isLoggedIn() {
    let token = localStorage.getItem("token");
    if(token==undefined || token === '' || token==null) {
      return false;

    }else{
      return true;
    }
  }

  //  for logout user
  logout() {
    localStorage.removeItem('token')
    return true;
  }

  //get Token
  getToken() {
    return localStorage.getItem('token');
  }
}
