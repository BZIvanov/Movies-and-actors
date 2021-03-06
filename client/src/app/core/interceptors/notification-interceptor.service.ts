import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpResponse,
  HttpEvent,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class NotificationInterceptorService implements HttpInterceptor {
  constructor(public toastr: ToastrService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((res) => {
        if (res instanceof HttpResponse) {
          if (res["statusText"] && res["statusText"] === "Created") {
            // Created is retured on user and movie creation so we further check
            if (res["body"]["title"]) {
              this.toastr.success("Successfully added new movie");
            } else if (res["body"]["fullName"]) {
              this.toastr.success("Successfully added new actor");
            } else {
              this.toastr.success("Successfully registered!");
            }
          } else if (res.url.endsWith("/login")) {
            this.toastr.success("Successfully logged in!");
          } else if (res.url.endsWith("/logout")) {
            this.toastr.success("Successfully logged out!");
          }
        }
      }),
      catchError((err) => {
        if (err["statusText"] && err["statusText"] === "Unauthorized") {
          this.toastr.error("Invalid credentials", err["statusText"]);
        } else if (err["statusText"] && err["statusText"] === "Conflict") {
          this.toastr.error(
            "Username or email is already taken!",
            err["statusText"]
          );
        }

        throw err;
      })
    );
  }
}
