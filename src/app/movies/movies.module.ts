import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MovieRoutingModule } from './movie-routing.module';
import { AddNewMovieComponent } from './components/add-new-movie/add-new-movie.component';
import { MoviesHandlerService } from './services/movies-handler.service';
import { AllMoviesComponent } from './components/all-movies/all-movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieDetailsResolverService } from './services/movie-details-resolver.service';


@NgModule({
  declarations: [AddNewMovieComponent, AllMoviesComponent, MovieDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    MovieRoutingModule
  ],
  providers: [
    MoviesHandlerService,
    MovieDetailsResolverService
  ]
})
export class MoviesModule { }
