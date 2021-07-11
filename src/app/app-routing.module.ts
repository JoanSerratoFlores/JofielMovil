import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'art-academicos',
    loadChildren: () => import('./pages/art-academicos/art-academicos.module').then( m => m.ArtAcademicosPageModule)
  },
  {
    path: 'nombres-libros',
    loadChildren: () => import('./pages/nombres-libros/nombres-libros.module').then( m => m.NombresLibrosPageModule)
  },
  {
    path: 'proy-academicos',
    loadChildren: () => import('./pages/proy-academicos/proy-academicos.module').then( m => m.ProyAcademicosPageModule)
  },
  {
    path: 'otros-logros',
    loadChildren: () => import('./pages/otros-logros/otros-logros.module').then( m => m.OtrosLogrosPageModule)
  },
  {
    path: 'certif-sena',
    loadChildren: () => import('./pages/certif-sena/certif-sena.module').then( m => m.CertifSENAPageModule)
  },
  {
    path: 'capacitacion',
    loadChildren: () => import('./pages/capacitacion/capacitacion.module').then( m => m.CapacitacionPageModule)
  },
  {
    path: 'tecnologias',
    loadChildren: () => import('./pages/tecnologias/tecnologias.module').then( m => m.TecnologiasPageModule)
  },
  {
    path: 'idiomas',
    loadChildren: () => import('./pages/idiomas/idiomas.module').then( m => m.IdiomasPageModule)
  },
  {
    path: 'estudios',
    loadChildren: () => import('./pages/estudios/estudios.module').then( m => m.EstudiosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
