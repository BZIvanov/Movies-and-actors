import { Component, OnInit } from '@angular/core';

import { UserHandleService } from '../../services/user-handle.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserHandleService) { }

  ngOnInit() {
  }

  register(data: any) {
    this.userService.registerUser(data).subscribe(data => {
      console.log(data);
    });
  }

}
