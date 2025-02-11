import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuegosAventuraPage } from './juegos-aventura.page';

const routes: Routes = [
  {
    path: '',
    component: JuegosAventuraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegosAventuraPageRoutingModule {}
