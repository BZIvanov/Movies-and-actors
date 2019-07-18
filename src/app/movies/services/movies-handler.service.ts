import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import constants from '../../shared/constants';

@Injectable()
export class MoviesHandlerService {

  constructor(private http: HttpClient) { }

  addNewMovie(data: any) {
    return this.http.post(constants.baseUrl + "appdata/" + constants.kinveyAppKey + "/movies", data);
  }

  getAllMovies() {
    return this.http.get(constants.baseUrl + "appdata/" + constants.kinveyAppKey + "/movies");
  }
}
