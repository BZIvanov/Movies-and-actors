import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MovieRoutingModule } from './movie-routing.module';
import { AddNewMovieComponent } from './components/add-new-movie/add-new-movie.component';
import { MoviesHandlerService } from './services/movies-handler.service';
import { AllMoviesComponent } from './components/all-movies/all-movies.component';


@NgModule({
  declarations: [AddNewMovieComponent, AllMoviesComponent],
  imports: [
    CommonModule,
    FormsModule,
    MovieRoutingModule
  ],
  providers: [
    MoviesHandlerService,
  ]
})
export class MoviesModule { }
