import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

import { UserHandleService } from '../../services/user-handle.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  private registerStream$: Subscription;

  constructor(private userService: UserHandleService, private router: Router) { }

  ngOnInit() {
  }

  register(data: any, form: NgForm) {
    if (!form.invalid && (data.passwords.password === data.passwords.repeatPassword)) {
      let userObject = {
        username: data.username,
        email: data.email,
        password: data.passwords.password
      }

      this.registerStream$ = this.userService.registerUser(userObject).subscribe(response => {
        this.router.navigate(['/user', 'login']);
      });
    }
  }

  ngOnDestroy() {
    if (this.registerStream$) {
      this.registerStream$.unsubscribe();
    }
  }
}
