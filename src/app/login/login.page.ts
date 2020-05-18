import { Component, OnInit } from '@angular/core';
import * as OktaSignIn from '@okta/okta-signin-widget';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 
  
  private widget: OktaSignIn = new OktaSignIn({
    baseUrl: 'https://dev-216506.okta.com',
    //clientId: '0oabzp1mnFI12qOqD4x6',
  authParams: {
      /*
      redirectUri: 'http://localhost:8100/implicit/callback',
      authorizeUrl: 'https://dev-216506.okta.com/oauth2/v1/authorize',
      responseMode: 'query',
      responseType: ['code'],*/
      pkce: true
    },
  /*  features: {idpDiscovery: true},
    idps: [
      {type: 'GOOGLE', id: '0oabzp1mnFI12qOqD4x6'}
    ],
    idpDisplay: 'PRIMARY'*/
  });

  constructor(private oktaAuth: OktaAuthService) { }

  ngOnInit() {
    this.widget.renderEl(
      {el: '#okta-signin-container'},
      (result) => {
        if(result.status == 'SUCCESS') {
          this.oktaAuth.loginRedirect('/', { sessionToken: result.session.token });
        }
      },
      (error) => {
        console.log('error!!');
      }
    );
  }

}
