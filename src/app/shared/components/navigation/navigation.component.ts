import { Component, OnInit } from '@angular/core';

import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private userService: UserAuthService) { }

  ngOnInit() {
  }

  logoutUser() {
    localStorage.clear();
  }

  hasUser(): boolean {
    return this.userService.isLoggedIn();
  }
}
