import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

import { UserHandleService } from '../../services/user-handle.service';
import { UserAuthService } from 'src/app/core/services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private loginStream$: Subscription;

  constructor(private userService: UserHandleService, private router: Router, private userAuth: UserAuthService) { }

  ngOnInit() {
  }

  login(data: any, form: NgForm) {
    if (!form.invalid) {
      let userData = {
        username: data.username,
        password: data.password
      };
      this.loginStream$ = this.userService.loginUser(userData).subscribe(response => {
        this.userAuth.saveUserData(response);
        this.router.navigate(['/home']);
      });
    }
  }

  ngOnDestroy() {
    if (this.loginStream$) {
      this.loginStream$.unsubscribe();
    }
  }
}
