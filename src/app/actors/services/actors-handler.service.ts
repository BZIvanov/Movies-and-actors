import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import constants from '../../shared/constants';
import { Actor } from '../../core/interfaces';
import { SessionService } from '../../core/services/session.service';


@Injectable()
export class ActorsHandlerService {

  constructor(private http: HttpClient, private sessionService: SessionService) { }

  getAllActors(): Observable<Array<Actor>> {
    return this.http.get<Array<Actor>>(constants.baseUrl + "appdata/" + constants.kinveyAppKey + "/actors");
  }

  addNewActor(data: any) {
    return this.http.post(constants.baseUrl + "appdata/" + constants.kinveyAppKey + "/actors", data);
  }

  getActor(id: string) {
    return this.http.get<Actor>(constants.baseUrl + "appdata/" + constants.kinveyAppKey + "/actors/" + id)
      .pipe(map(x => {
        if (x['_acl']['creator'] === this.sessionService.userID) {
          x['owner'] = true;
        } else {
          x['owner'] = false;
        }
        return x;
      }));
  }

  editActor(formData: any, id: string) {
    return this.http.put(constants.baseUrl + "appdata/" + constants.kinveyAppKey + "/actors/" + id, formData);
  }

  deleteActor(id: string) {
    return this.http.delete(constants.baseUrl + "appdata/" + constants.kinveyAppKey + "/actors/" + id);
  }

  searchForActor(name: string) {
    return this.http.get<Array<Actor>>(constants.baseUrl + "appdata/" + constants.kinveyAppKey + "/actors")
    .pipe(
      map(x => {
        x = x.filter(y => {
          if (name === '') {
            return true;
          }
          return y['fullName'].toLocaleLowerCase().includes(name.toLowerCase());
        })
        return x;
      })
    );
  }
}
