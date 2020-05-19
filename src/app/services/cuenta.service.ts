import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

import { Cuenta } from '../models/cuenta';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  private _cuenta: BehaviorSubject<Cuenta[]> = new BehaviorSubject<Cuenta[]>([]);

  constructor(private http: HttpClient) { }

  get cuenta() {
    return this._cuenta.asObservable();
  }

  getCuentaRequest() {
    this.http.get('http://localhost:1080/CapaBank/wscuentas').subscribe((response: any) => {
      console.log(response);

      for(let i=0; i<response.length; i++) {
        let cuenta = response[i];
        this.cuenta.pipe(take(1)).subscribe((cnta) => {
          this._cuenta.next(cnta.concat(cuenta));
        });
      }

    });
  }

  getCuenta() {
    const tokenData = JSON.parse(window.localStorage.getItem('okta-token-storage'));
    const token = tokenData.accessToken.value;

    const headers: any = {headers:
      {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Beared ' + token
      }
    };
    console.log(headers);

    this.http.get('http://localhost:1080/CapaBank/wscuentas/r@gmil.com', headers).subscribe((response:any) => {
      console.log(response);

      for(let i=0; i<response.length; i++) {
        let cuenta = response[i];
        this.cuenta.pipe(take(1)).subscribe((cnta) => {
          this._cuenta.next(cnta.concat(cuenta));
        });
      }
    });
  }
}
