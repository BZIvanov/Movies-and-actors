import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { NgForm } from "@angular/forms";

import { UserHandleService } from "../../services/user-handle.service";
import { SessionService } from "src/app/core/services/session.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  private loginStream$: Subscription;

  constructor(
    private userService: UserHandleService,
    private router: Router,
    private userAuth: SessionService
  ) {}

  ngOnInit() {}

  login(data: any, form: NgForm) {
    if (!form.invalid) {
      let userData = {
        email: data.email,
        password: data.password,
      };
      this.loginStream$ = this.userService
        .loginUser(userData)
        .subscribe((response) => {
          this.userAuth.saveUserData(response);
          this.router.navigate(["/movie", "all"]);
        });
    }
  }

  ngOnDestroy() {
    if (this.loginStream$) {
      this.loginStream$.unsubscribe();
    }
  }
}
