import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { MoviesHandlerService } from '../../services/movies-handler.service';
import { Movie } from '../../../core/interfaces';


@Component({
  selector: 'app-add-new-movie',
  templateUrl: './add-new-movie.component.html',
  styleUrls: ['./add-new-movie.component.scss']
})
export class AddNewMovieComponent implements OnInit, OnDestroy {
  private moviesStream$: Subscription

  constructor(private moviesService: MoviesHandlerService, private router: Router) { }

  ngOnInit() {
  }

  addMovie(formData: Movie) {
    this.moviesStream$ = this.moviesService.addNewMovie(formData).subscribe(movies => {
      this.router.navigate(['movie', 'all']);
    })
  }

  ngOnDestroy() {
    if (this.moviesStream$) {
      this.moviesStream$.unsubscribe();
    }
  }
}
