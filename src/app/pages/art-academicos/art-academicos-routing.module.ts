import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtAcademicosPage } from './art-academicos.page';

const routes: Routes = [
  {
    path: '',
    component: ArtAcademicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtAcademicosPageRoutingModule {}
