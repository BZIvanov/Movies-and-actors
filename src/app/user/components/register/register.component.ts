import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

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

  register(data: any) {
    this.registerStream$ = this.userService.registerUser(data).subscribe(response => {
      this.userService.saveUserData(response);
      this.router.navigate(['/user', 'login']);
    });
  }

  ngOnDestroy() {
    if (this.registerStream$) {
      this.registerStream$.unsubscribe();
    }
  }
}
