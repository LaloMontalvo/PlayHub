import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuegosCarrerasPageRoutingModule } from './juegos-carreras-routing.module';

import { JuegosCarrerasPage } from './juegos-carreras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuegosCarrerasPageRoutingModule
  ],
  declarations: [JuegosCarrerasPage]
})
export class JuegosCarrerasPageModule {}
