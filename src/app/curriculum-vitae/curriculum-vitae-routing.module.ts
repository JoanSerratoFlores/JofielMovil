import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurriculumVitaePage } from './curriculum-vitae.page';

const routes: Routes = [
  {
    path: '',
    component: CurriculumVitaePage
  },
  {
    path: 'articulos-academicos',
    loadChildren: () => import('./pages/articulos-academicos/articulos-academicos.module').then( m => m.ArticulosAcademicosPageModule)
  },
  {
    path: 'capacitacion',
    loadChildren: () => import('./pages/capacitacion/capacitacion.module').then( m => m.CapacitacionPageModule)
  },
  {
    path: 'certificacion',
    loadChildren: () => import('./pages/certificacion/certificacion.module').then( m => m.CertificacionPageModule)
  },
  {
    path: 'credenciales',
    loadChildren: () => import('./pages/credenciales/credenciales.module').then( m => m.CredencialesPageModule)
  },
  {
    path: 'idioma',
    loadChildren: () => import('./pages/idioma/idioma.module').then( m => m.IdiomaPageModule)
  },
  {
    path: 'info-personal',
    loadChildren: () => import('./pages/info-personal/info-personal.module').then( m => m.InfoPersonalPageModule)
  },
  {
    path: 'libros',
    loadChildren: () => import('./pages/libros/libros.module').then( m => m.LibrosPageModule)
  },
  {
    path: 'otros',
    loadChildren: () => import('./pages/otros/otros.module').then( m => m.OtrosPageModule)
  },
  {
    path: 'proyectos',
    loadChildren: () => import('./pages/proyectos/proyectos.module').then( m => m.ProyectosPageModule)
  },
  {
    path: 'tecnologias',
    loadChildren: () => import('./pages/tecnologias/tecnologias.module').then( m => m.TecnologiasPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurriculumVitaePageRoutingModule {}
