import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MoviesInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if (request instanceof HttpRequest) {
      if(request.url.includes('/movies')) {
        request = request.clone({
          setHeaders: {
            Authorization: `Kinvey ${localStorage.getItem('authtoken')}`
          }
        });
      }  
    }
    // console.log(request);
    return next.handle(request);
  }
}
