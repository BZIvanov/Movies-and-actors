import { Component, OnInit, DoCheck } from "@angular/core";

import { SessionService } from "../../../core/services/session.service";
import { UserHandleService } from "../../../user/services/user-handle.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit, DoCheck {
  constructor(
    private userService: SessionService,
    private userHandle: UserHandleService
  ) {}
  username: string = localStorage.getItem("username");

  ngOnInit() {}

  ngDoCheck() {
    this.username = localStorage.getItem("username");
  }

  logoutUser() {
    localStorage.clear();
    // this.userHandle.logoutUser().subscribe(response => {
    //   localStorage.clear();
    // });
  }

  hasUser(): boolean {
    return this.userService.isLoggedIn();
  }
}
