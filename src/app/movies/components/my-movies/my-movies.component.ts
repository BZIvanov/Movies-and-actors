import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { Movie } from '../../../core/interfaces';
import { MoviesHandlerService } from '../../services/movies-handler.service';


@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.scss']
})
export class MyMoviesComponent implements OnInit {
  private movies$: Observable<Array<Movie>>;

  constructor(private movieService: MoviesHandlerService, public toastr: ToastrService) { }

  ngOnInit() {
    this.movies$ = this.movieService.getMyMovies();
  }

  deleteItem(id: string) {
    let agreed = confirm("Are you sure you want to delete the movie?");
    if (agreed) {
      this.movieService.deleteMovie(id).subscribe(data => {
        this.toastr.info("Successfully deleted movie", "Deleted!")
        this.movies$ = this.movieService.getMyMovies();
      })
    }
  }
}
