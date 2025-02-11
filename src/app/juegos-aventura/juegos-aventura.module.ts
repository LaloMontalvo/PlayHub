import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuegosAventuraPageRoutingModule } from './juegos-aventura-routing.module';

import { JuegosAventuraPage } from './juegos-aventura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuegosAventuraPageRoutingModule
  ],
  declarations: [JuegosAventuraPage]
})
export class JuegosAventuraPageModule {}
