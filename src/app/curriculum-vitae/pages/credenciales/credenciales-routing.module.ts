import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CredencialesPage } from './credenciales.page';

const routes: Routes = [
  {
    path: '',
    component: CredencialesPage
  },
  {
    path: 'new-credencial',
    loadChildren: () => import('./new-credencial/new-credencial.module').then( m => m.NewCredencialPageModule)
  },
  {
    path: 'edit-credencial',
    loadChildren: () => import('./edit-credencial/edit-credencial.module').then( m => m.EditCredencialPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CredencialesPageRoutingModule {}
