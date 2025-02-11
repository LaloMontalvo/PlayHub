import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuegosEstrategiaPageRoutingModule } from './juegos-estrategia-routing.module';

import { JuegosEstrategiaPage } from './juegos-estrategia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuegosEstrategiaPageRoutingModule
  ],
  declarations: [JuegosEstrategiaPage]
})
export class JuegosEstrategiaPageModule {}
