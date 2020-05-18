import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);


  constructor(private http: HttpClient) { }

  get user() {
    return this._user.asObservable();
  }

  getUserRequest() {
    this.http.get('http://localhost:1080/CapaBank/wsusers').subscribe((response: any) => {
      console.log(response);

      for(let i=0; i<response.length; i++) {
        let user = response[i];
        this.user.pipe(take(1)).subscribe((usr) => {
          this._user.next(usr.concat(user));
        });
      }

    });
  }

}
