import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  public userInfo = [];
  constructor() { }

  public getUserInfo(){
    return [
      {"username": "mangeshk", "password": "mangeshk", "roles":"admin"}
    ];
  }

  verifyLogin(username, password){
    console.log('checking login success '+ this.getUserInfo());
    this.userInfo = this.getUserInfo();
    // if(this.userInfo[0].username == username && this.userInfo[0].password == password){
    if("mangeshk" == username && "mangeshk" == password){
      console.log('login success');
      return true;
    }
    console.log('login failed '+this.userInfo[0].username);
    return false;
  }

}
