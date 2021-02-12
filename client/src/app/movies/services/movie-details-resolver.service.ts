import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Movie } from '../../core/interfaces';
import { MoviesHandlerService } from './movies-handler.service';


@Injectable()
export class MovieDetailsResolverService implements Resolve<Movie> {

  constructor(private movieService: MoviesHandlerService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params['id'];
    return this.movieService.getAMovie(id);
  }
}
