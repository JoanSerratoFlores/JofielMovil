import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CredencialesAcademicasPage } from './credenciales-academicas.page';

const routes: Routes = [
  {
    path: '',
    component: CredencialesAcademicasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CredencialesAcademicasPageRoutingModule {}
