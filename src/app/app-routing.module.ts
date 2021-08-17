import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'articulos-academicos',
    loadChildren: () => import('./curriculum-vitae/pages/articulos-academicos/articulos-academicos.module').then( m => m.ArticulosAcademicosPageModule)
  },
  {
    path: 'clibros',
    loadChildren: () => import('./curriculum-vitae/pages/libros/libros.module').then( m => m.LibrosPageModule)
  },
  {
    path: 'proyectos',
    loadChildren: () => import('./curriculum-vitae/pages/proyectos/proyectos.module').then( m => m.ProyectosPageModule)
  },
  {
    path: 'otros',
    loadChildren: () => import('./curriculum-vitae/pages/otros/otros.module').then( m => m.OtrosPageModule)
  },
  {
    path: 'certificacion',
    loadChildren: () => import('./curriculum-vitae/pages/certificacion/certificacion.module').then( m => m.CertificacionPageModule)
  },
  {
    path: 'capacitacion',
    loadChildren: () => import('./curriculum-vitae/pages/capacitacion/capacitacion.module').then( m => m.CapacitacionPageModule)
  },
  {
    path: 'tecnologias',
    loadChildren: () => import('./curriculum-vitae/pages/tecnologias/tecnologias.module').then( m => m.TecnologiasPageModule)
  },
  {
    path: 'idioma',
    loadChildren: () => import('./curriculum-vitae/pages/idioma/idioma.module').then( m => m.IdiomaPageModule)
  },
  {
    path: 'credenciales',
    loadChildren: () => import('./curriculum-vitae/pages/credenciales/credenciales.module').then( m => m.CredencialesPageModule)
  },
  {
    path: 'curriculum-vitae',
    loadChildren: () => import('./curriculum-vitae/curriculum-vitae.module').then( m => m.CurriculumVitaePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'loginadmin',
    loadChildren: () => import('./loginadmin/loginadmin.module').then( m => m.LoginadminPageModule)
  },
  {
    path: 'registerform',
    loadChildren: () => import('./registerform/registerform.module').then( m => m.RegisterformPageModule)
  },
  {
    path: 'pregunta',
    loadChildren: () => import('./pregunta/pregunta.module').then( m => m.PreguntaPageModule)
  },
  {
    path: 'libros',
    loadChildren: () => import('./libros/libros.module').then( m => m.LibrosPageModule)
  },
  {
    path: 'cuestion',
    loadChildren: () => import('./cuestion/cuestion.module').then( m => m.CuestionPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
