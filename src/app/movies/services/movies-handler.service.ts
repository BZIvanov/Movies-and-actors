import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import constants from '../../shared/constants';
import { Movie } from '../../core/interfaces';
import { SessionService } from 'src/app/core/services/session.service';

@Injectable()
export class MoviesHandlerService {

  constructor(private http: HttpClient, private sessionService: SessionService) { }

  addNewMovie(data: Movie) {
    return this.http.post(constants.baseUrl + "appdata/" + constants.kinveyAppKey + "/movies", data);
  }

  getAllMovies() {
    return this.http.get<Array<Movie>>(constants.baseUrl + "appdata/" + constants.kinveyAppKey + "/movies");
  }

  getMyMovies() {
    return this.http.get<Array<Movie>>(constants.baseUrl + "appdata/" + constants.kinveyAppKey + "/movies")
      .pipe(
        map(x => {
          x = x.filter(y => {
            return y['_acl']['creator'] === this.sessionService.userID;
          })
          return x;
        })
      );
  }

  getAMovie(id: string) {
    return this.http.get<Movie>(constants.baseUrl + "appdata/" + constants.kinveyAppKey + "/movies/" + id);
  }
}
