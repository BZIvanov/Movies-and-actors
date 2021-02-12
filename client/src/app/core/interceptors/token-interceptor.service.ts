import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpEvent,
} from "@angular/common/http";
import { Observable } from "rxjs";

import { SessionService } from "../services/session.service";

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private userService: SessionService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes(`/users/`)) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.userService.token}`,
          "Content-Type": "application/json",
        },
      });
    }

    return next.handle(req);
  }
}
