import { Component, OnInit } from '@angular/core';

import { UserHandleService } from '../../services/user-handle.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserHandleService) { }

  ngOnInit() {
  }

  login(data: any) {
    this.userService.loginUser(data).subscribe(data => {
      console.log(data);
    });
  }
}
