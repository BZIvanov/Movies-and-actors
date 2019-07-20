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

  logoutUser() {
    return this.http.post<any>(`${constants.baseUrl}user/${constants.kinveyAppKey}/_logout`, {});
  }
}
