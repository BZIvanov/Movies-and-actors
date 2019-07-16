import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { UserRoutingModule } from './user-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserHandleService } from './services/user-handle.service';
import { AuthorizationInterceptorService } from './services/authorization-interceptor.service';

@NgModule({
  declarations: [
    RegisterComponent, 
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
  ],
  providers: [
    UserHandleService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptorService,
      multi: true
    }
  ]
})
export class UserModule { }
