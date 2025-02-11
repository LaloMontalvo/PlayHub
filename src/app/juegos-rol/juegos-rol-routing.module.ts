import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuegosRolPage } from './juegos-rol.page';

const routes: Routes = [
  {
    path: '',
    component: JuegosRolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegosRolPageRoutingModule {}
