import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticulosAcademicosPage } from './articulos-academicos.page';

const routes: Routes = [
  {
    path: '',
    component: ArticulosAcademicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticulosAcademicosPageRoutingModule {}
