import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { MovieFormComponent } from '../components/movie-form/movie-form.component';


@Injectable()
export class DeactivateFormService implements CanDeactivate<MovieFormComponent> {

  constructor() { }

  canDeactivate(component: MovieFormComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, 
    nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // if not editing let the user leave at any time
      if (component.mode === "Add New Movie") {
        return true
      }
      if (!component.form.invalid) {
        return true
      }
      
      let drop = confirm("Are you sure you want to leave the form page?");
      if (drop) {
        return true;
      }
      return false;
  }
}
