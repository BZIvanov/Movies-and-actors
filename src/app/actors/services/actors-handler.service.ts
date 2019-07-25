import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import constants from '../../shared/constants';
import { Actor } from '../../core/interfaces';


@Injectable()
export class ActorsHandlerService {

  constructor(private http: HttpClient) { }

  getAllActors(): Observable<Array<Actor>> {
    return this.http.get<Array<Actor>>(constants.baseUrl + "appdata/" + constants.kinveyAppKey + "/actors");
  }

  addNewActor(data: any) {
    return this.http.post(constants.baseUrl + "appdata/" + constants.kinveyAppKey + "/actors", data);
  }

  getActor(id: string) {
    return this.http.get<Actor>(constants.baseUrl + "appdata/" + constants.kinveyAppKey + "/actors/" + id);
  }
}
