import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Router } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

export function onAuthRequired(oktaAuth, injector) {
  const router = injector.get(Router);
  router.navigate(['/login']);
}

export const WS_BASE_URL = 'http://localhost:1080';
export const IDENTITY_PROVIDER = '';

const oktaConfig = {
  issuer: 'https://dev-216506.okta.com/oauth2/default',   //URL del servidor d'autenticació OKTA
  redirectUri: 'http://localhost:8100/implicit/callback', //URL de redirecció de login de l'aplicació OKTA
  clientId: '0oabzp1mnFI12qOqD4x6',                       //ClientID de l'aplicació OKTA
  pkce: true,
  onAuthRequired: onAuthRequired
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    OktaAuthModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: OKTA_CONFIG, useValue: oktaConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
