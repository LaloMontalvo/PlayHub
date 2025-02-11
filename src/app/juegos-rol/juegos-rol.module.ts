import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuegosRolPageRoutingModule } from './juegos-rol-routing.module';

import { JuegosRolPage } from './juegos-rol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuegosRolPageRoutingModule
  ],
  declarations: [JuegosRolPage]
})
export class JuegosRolPageModule {}
