import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-my-login',
  templateUrl: './my-login.component.html',
  styleUrls: ['./my-login.component.css']
})
export class MyLoginComponent implements OnInit {

  public loginMessage = "";

  public username="";
  public password="";

  constructor(private _loginService: LoginService) { }

  ngOnInit() {
  }

  public onClick(event){
    // window.alert("Login successful");
    this.loginMessage = "You are logged in";
    console.log(event);
  }

  public verifyLogin(userId, pass){
    this.loginMessage = "You are logged in";
  }

  public onClickLogin(){
    this.loginMessage = "You are logged in";
    var isSuccess = this._loginService.verifyLogin(this.username, this.password);
    if (isSuccess){
      window.alert("Welcome "+this.username +" "+this.loginMessage);
    } else{
      window.alert("Invalid login details. Pls try again!");
    }
  }
}
