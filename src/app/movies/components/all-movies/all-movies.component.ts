import { Component, OnInit } from '@angular/core';

import { MoviesHandlerService } from '../../services/movies-handler.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit {
  private movies$: Observable<Object>;

  constructor(private movieService: MoviesHandlerService) { }

  ngOnInit() {
    this.movies$ = this.movieService.getAllMovies();
  }



}
