import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, tap } from "rxjs/operators";

import constants from "../../shared/constants";
import { Movie } from "../../core/interfaces";
import { SessionService } from "src/app/core/services/session.service";

@Injectable()
export class MoviesHandlerService {
  constructor(
    private http: HttpClient,
    private sessionService: SessionService
  ) {}

  addNewMovie(data: Movie) {
    return this.http.post(constants.baseUrl + "movies", data);
  }

  getAllMovies() {
    return this.http.get<Array<Movie>>(constants.baseUrl + "movies");
  }

  getMyMovies() {
    return this.http.get<Array<Movie>>(
      `${constants.baseUrl}movies?user=${this.sessionService.userID}`
    );
  }

  getAMovie(id: string) {
    return this.http.get<Movie>(constants.baseUrl + "movies/" + id);
  }

  editMovie(formData: any, id: string) {
    return this.http.put(constants.baseUrl + "movies/" + id, formData);
  }

  deleteMovie(id: string) {
    return this.http.delete(constants.baseUrl + "movies/" + id);
  }

  searchMovie(title: string) {
    return this.http.get<Array<Movie>>(
      `${constants.baseUrl}movies?search=${title}`
    );
  }

  sortMoviesByYear(order: string) {
    return this.http.get<Array<Movie>>(
      `${constants.baseUrl}movies?order=${order}`
    );
  }
}
