import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

import constants from "../../shared/constants";
import { Actor } from "../../core/interfaces";
import { SessionService } from "../../core/services/session.service";

@Injectable()
export class ActorsHandlerService {
  constructor(
    private http: HttpClient,
    private sessionService: SessionService
  ) {}

  getAllActors(): Observable<Array<Actor>> {
    return this.http.get<Array<Actor>>(constants.baseUrl + "actors/");
  }

  addNewActor(data: any) {
    return this.http.post(constants.baseUrl + "actors", data);
  }

  getActor(id: string) {
    return this.http.get<Actor>(constants.baseUrl + "actors/" + id).pipe(
      map((actor) => {
        if (actor["creator"] === this.sessionService.userID) {
          actor["owner"] = true;
        } else {
          actor["owner"] = false;
        }
        return actor;
      })
    );
  }

  editActor(formData: any, id: string) {
    return this.http.put(constants.baseUrl + "actors/" + id, formData);
  }

  deleteActor(id: string) {
    return this.http.delete(constants.baseUrl + "actors/" + id);
  }

  searchForActor(name: string) {
    return this.http.get<Array<Actor>>(
      `${constants.baseUrl}actors?search=${name}`
    );
  }
}
