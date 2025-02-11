import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'juegos-accion',
    loadChildren: () => import('./juegos-accion/juegos-accion.module').then( m => m.JuegosAccionPageModule)
  },
  {
    path: 'juegos-aventura',
    loadChildren: () => import('./juegos-aventura/juegos-aventura.module').then( m => m.JuegosAventuraPageModule)
  },
  {
    path: 'juegos-deportes',
    loadChildren: () => import('./juegos-deportes/juegos-deportes.module').then( m => m.JuegosDeportesPageModule)
  },
  {
    path: 'juegos-rol',
    loadChildren: () => import('./juegos-rol/juegos-rol.module').then( m => m.JuegosRolPageModule)
  },
  {
    path: 'juegos-estrategia',
    loadChildren: () => import('./juegos-estrategia/juegos-estrategia.module').then( m => m.JuegosEstrategiaPageModule)
  },
  {
    path: 'juegos-carreras',
    loadChildren: () => import('./juegos-carreras/juegos-carreras.module').then( m => m.JuegosCarrerasPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
