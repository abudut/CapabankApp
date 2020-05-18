import { Component, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WS_BASE_URL } from '../app.module';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage   {

  public token: string;
 
  constructor(private http: HttpClient) {}

  getToken() {
    const tokenData = JSON.parse(window.localStorage.getItem('okta-token-storage'));
    this.token = tokenData.accessToken.value;
    //this.token = tokenData.idToken.value;

    const headers: any = {headers:
      {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Beared ' + this.token
      }
    };
    console.log(headers);

  }
}
