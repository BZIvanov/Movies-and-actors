import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

import constants from '../../shared/constants';
import { UserAuthService } from '../services/user-auth.service';


@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private userService: UserAuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.endsWith(`/user/${constants.kinveyAppKey}/`) || req.url.endsWith('/login')) {
      req = req.clone({
        setHeaders: {
          Authorization: `Basic ${btoa(`${constants.kinveyAppKey}:${constants.kinveyAppSecret}`)}`,
          'Content-Type': 'application/json'
        }
      });
    } else {
      req = req.clone({
        setHeaders: {
          Authorization: `Kinvey ${this.userService.token}`
        }
      });
    }
    
    return next.handle(req);
  }
}
