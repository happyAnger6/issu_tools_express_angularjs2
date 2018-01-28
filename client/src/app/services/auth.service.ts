import { Injectable } from '@angular/core';
import {User} from "../models/user";
import {Base64} from "js-base64";

@Injectable()
export class AuthService {

  public loginUser: User;
  constructor() { }

  setUser(user: User) {
    this.loginUser = user;
  }

  getCurUser() {
    return this.loginUser;
  }

  getAuthHeader() {
    if (this.loginUser) {
      return 'basic ' + Base64.encode(this.loginUser.Name + ':' + this.loginUser.Passwd);
    }
    return null;
  }

}
