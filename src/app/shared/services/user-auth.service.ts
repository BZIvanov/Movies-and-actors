import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  saveUserData(userData: any) {
    localStorage.setItem("username", userData.username);
    localStorage.setItem("authtoken", userData._kmd.authtoken);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('authtoken') !== null;
  }
}
