import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from '../../../core/interfaces';
import { MoviesHandlerService } from '../../services/movies-handler.service';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.scss']
})
export class MyMoviesComponent implements OnInit {
  private movies$: Observable<Array<Movie>>;

  constructor(private movieService: MoviesHandlerService) { }

  ngOnInit() {
    this.movies$ = this.movieService.getMyMovies();
  }

}
