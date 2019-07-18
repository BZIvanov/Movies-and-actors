import { Component, OnInit } from '@angular/core';

import { UserHandleService } from 'src/app/user/services/user-handle.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private userService: UserHandleService) { }

  ngOnInit() {
  }

  logoutUser() {
    localStorage.clear();
  }

  hasUser(): boolean {
    return this.userService.isLoggedIn();
  }
}
