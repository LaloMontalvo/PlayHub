import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuegosDeportesPage } from './juegos-deportes.page';

const routes: Routes = [
  {
    path: '',
    component: JuegosDeportesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegosDeportesPageRoutingModule {}
