import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllMoviesComponent } from './components/all-movies/all-movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MyMoviesComponent } from './components/my-movies/my-movies.component';
import { MovieDetailsResolverService } from './services/movie-details-resolver.service';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { DeactivateFormService } from './services/deactivate-form.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'all', component: AllMoviesComponent },
  { path: 'my-movies', component: MyMoviesComponent },
  { path: 'add', component: MovieFormComponent },
  {
    path: 'edit/:id',
    component: MovieFormComponent,
    canDeactivate: [DeactivateFormService],
  },
  {
    path: 'details/:id',
    component: MovieDetailsComponent,
    resolve: { targetMovie: MovieDetailsResolverService },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieRoutingModule {}
