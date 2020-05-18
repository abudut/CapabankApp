import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerUserPageRoutingModule } from './ver-user-routing.module';

import { VerUserPage } from './ver-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerUserPageRoutingModule
  ],
  declarations: [VerUserPage]
})
export class VerUserPageModule {}
