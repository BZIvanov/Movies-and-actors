import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { UserHandleService } from '../../services/user-handle.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private loginStream$: Subscription;

  constructor(private userService: UserHandleService, private router: Router) { }

  ngOnInit() {
  }

  login(data: any) {
    this.loginStream$ = this.userService.loginUser(data).subscribe(response => {
      this.userService.saveUserData(response);
      this.router.navigate(['/home']);
    });
  }

  ngOnDestroy() {
    if (this.loginStream$) {
      this.loginStream$.unsubscribe();
    }
  }
}
