import { Component, OnInit } from '@angular/core';
import { CuentaService } from '../services/cuenta.service';
import { Cuenta } from '../models/cuenta';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  cuenta: Cuenta[] = [];
  private Cuenta= this.cuenta;

  constructor(private cuentaService: CuentaService) { }

  ngOnInit() {
    this.cuentaService.getCuenta();
    this.cuentaService.cuenta.subscribe((cnta) => {
      this.cuenta = cnta;
    });
  }

}
