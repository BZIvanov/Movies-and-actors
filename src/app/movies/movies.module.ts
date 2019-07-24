import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MovieRoutingModule } from './movie-routing.module';
import { MoviesHandlerService } from './services/movies-handler.service';
import { AllMoviesComponent } from './components/all-movies/all-movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieDetailsResolverService } from './services/movie-details-resolver.service';
import { MyMoviesComponent } from './components/my-movies/my-movies.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { DeactivateFormService } from './services/deactivate-form.service';


@NgModule({
  declarations: [MovieFormComponent, AllMoviesComponent, MovieDetailsComponent, MyMoviesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MovieRoutingModule
  ],
  providers: [
    MoviesHandlerService,
    MovieDetailsResolverService,
    DeactivateFormService
  ]
})
export class MoviesModule { }
