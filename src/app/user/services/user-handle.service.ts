import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import constants from '../../shared/constants';

@Injectable()
export class UserHandleService {

  constructor(private http: HttpClient) { }

  
  registerUser (data: any) {
    return this.http.post<any>(constants.baseUrl + "user/" + constants.kinveyAppKey + "/", data);
  }

  loginUser (data: any) {
    return this.http.post<any>(constants.baseUrl + "user/" + constants.kinveyAppKey + "/login", data);
  }

  saveUserData(userData: any) {
    localStorage.setItem("username", userData.username);
    localStorage.setItem("authtoken", userData._kmd.authtoken);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem("authtoken") ? false : true;
  }
}
