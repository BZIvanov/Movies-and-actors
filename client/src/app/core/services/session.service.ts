import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SessionService {
  constructor() {}

  saveUserData(userData: any) {
    localStorage.setItem("username", userData.username);
    localStorage.setItem("authtoken", userData.token);
    localStorage.setItem("userID", userData.id);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem("authtoken") !== null;
  }

  get token(): string | null {
    return localStorage.getItem("authtoken");
  }

  get userID(): string | null {
    return localStorage.getItem("userID");
  }
}
