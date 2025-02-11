import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuegosEstrategiaPage } from './juegos-estrategia.page';

const routes: Routes = [
  {
    path: '',
    component: JuegosEstrategiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegosEstrategiaPageRoutingModule {}
