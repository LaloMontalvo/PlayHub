import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuegosAccionPageRoutingModule } from './juegos-accion-routing.module';

import { JuegosAccionPage } from './juegos-accion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuegosAccionPageRoutingModule
  ],
  declarations: [JuegosAccionPage]
})
export class JuegosAccionPageModule {}
