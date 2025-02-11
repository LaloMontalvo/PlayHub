import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuegosCarrerasPage } from './juegos-carreras.page';

const routes: Routes = [
  {
    path: '',
    component: JuegosCarrerasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegosCarrerasPageRoutingModule {}
