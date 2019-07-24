import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HomeComponent } from './components/home/home.component';
import { LoadingComponent } from './components/loading/loading.component';
import { TokenInterceptorService } from './interceptors/token-interceptor.service';
import { NotificationInterceptorService } from './interceptors/notification-interceptor.service';
import { LoadingInterceptorService } from './interceptors/loading-interceptor.service';


@NgModule({
  declarations: [HomeComponent, LoadingComponent],
  imports: [
    CommonModule,
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
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptorService,
      multi: true
    }
  ],
  exports: [
    HomeComponent,
    LoadingComponent
  ]
})
export class CoreModule { }
