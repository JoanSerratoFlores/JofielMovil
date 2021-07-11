import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProyAcademicosPage } from './proy-academicos.page';

const routes: Routes = [
  {
    path: '',
    component: ProyAcademicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyAcademicosPageRoutingModule {}
