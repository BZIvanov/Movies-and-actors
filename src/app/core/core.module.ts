import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HomeComponent } from './components/home/home.component';
import { TokenInterceptorService } from './interceptors/token-interceptor.service';
import { NotificationInterceptorService } from './interceptors/notification-interceptor.service';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptorService,
      multi: true
    }
  ],
  exports: [
    HomeComponent
  ]
})
export class CoreModule { }
