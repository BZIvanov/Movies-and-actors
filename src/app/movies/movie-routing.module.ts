import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewMovieComponent } from './components/add-new-movie/add-new-movie.component';
import { AllMoviesComponent } from './components/all-movies/all-movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieDetailsResolverService } from './services/movie-details-resolver.service';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'all', component: AllMoviesComponent},
    { path: 'add', component: AddNewMovieComponent},
    { path: 'details/:id', component: MovieDetailsComponent, resolve: { targetMovie: MovieDetailsResolverService } }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MovieRoutingModule { }