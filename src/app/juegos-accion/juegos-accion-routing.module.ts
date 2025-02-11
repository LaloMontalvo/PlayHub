import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuegosAccionPage } from './juegos-accion.page';

const routes: Routes = [
  {
    path: '',
    component: JuegosAccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegosAccionPageRoutingModule {}
