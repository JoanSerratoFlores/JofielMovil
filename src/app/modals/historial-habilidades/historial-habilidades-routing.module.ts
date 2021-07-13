import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialHabilidadesPage } from './historial-habilidades.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialHabilidadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialHabilidadesPageRoutingModule {}
