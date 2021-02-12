import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingServiceService } from '../services/loading-service.service';

@Injectable()
export class LoadingInterceptorService implements HttpInterceptor {

  constructor(public loadingService: LoadingServiceService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.show();
    return next.handle(req).pipe(
        finalize(() => this.loadingService.hide())
    );
  }
}
