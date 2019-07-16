import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import constants from '../../shared/constants';

@Injectable()
export class AuthorizationInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if (request.url.endsWith('/login')) {
      request = request.clone({
        setHeaders: {
          Authorization: `'Kinvey ${localStorage.getItem('authtoken')}`
        }
      });
    } else {
      request = request.clone({
        setHeaders: {
          Authorization: `Basic ${btoa(constants.kinveyAppKey + ':' + constants.kinveyAppSecret)}`
        }
      });
    }
    console.log(request)
    return next.handle(request);
  }
}
