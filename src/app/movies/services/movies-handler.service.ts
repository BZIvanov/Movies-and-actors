import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import constants from '../../shared/constants';
import { Movie } from '../../core/interfaces';

@Injectable()
export class MoviesHandlerService {

  constructor(private http: HttpClient) { }

  addNewMovie(data: Movie) {
    return this.http.post(constants.baseUrl + "appdata/" + constants.kinveyAppKey + "/movies", data);
  }

  getAllMovies() {
    return this.http.get<Array<Movie>>(constants.baseUrl + "appdata/" + constants.kinveyAppKey + "/movies");
  }

  getAMovie(id: string) {
    return this.http.get<Movie>(constants.baseUrl + "appdata/" + constants.kinveyAppKey + "/movies/" + id);
  }
}
