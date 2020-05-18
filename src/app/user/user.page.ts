import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {



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
