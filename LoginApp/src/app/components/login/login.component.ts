
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
    username : '',
    password : ''
  }

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("form submitted ");
    if((this.credentials.username!=''&& this.credentials.password!='') &&
      (this.credentials.username!=null && this.credentials.password)) {

        console.log("We need to submit the form to the server");
        //Genrate the Token
        this.loginService.generateToken(this.credentials).subscribe(
          (Response:any)=>{
            //OnSuccess
            console.log(Response.token)
            this.loginService.loginuser(Response.token);
            window.location.href="/dashboard";
          },
          error=>{
            //OnError
            console.log("error")
          }
        )
      } else {
        console.log("fields are empty")
      }
  }
}
