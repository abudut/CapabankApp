import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerUserPage } from './ver-user.page';

const routes: Routes = [
  {
    path: '',
    component: VerUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerUserPageRoutingModule {}
