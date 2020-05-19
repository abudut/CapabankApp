import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddtransferenciaPage } from './addtransferencia.page';

const routes: Routes = [
  {
    path: '',
    component: AddtransferenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddtransferenciaPageRoutingModule {}
