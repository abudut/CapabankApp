import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.page.html',
  styleUrls: ['./edituser.page.scss'],
})
export class EdituserPage implements OnInit {

   user: User[] = [];
  private User= this.user;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserRequest();
    this.userService.user.subscribe((usr) => {
      this.user = usr;
    });
  }
}
