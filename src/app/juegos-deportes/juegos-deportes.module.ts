import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuegosDeportesPageRoutingModule } from './juegos-deportes-routing.module';

import { JuegosDeportesPage } from './juegos-deportes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuegosDeportesPageRoutingModule
  ],
  declarations: [JuegosDeportesPage]
})
export class JuegosDeportesPageModule {}
