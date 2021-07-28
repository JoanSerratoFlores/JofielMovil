import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificacionPage } from './certificacion.page';

const routes: Routes = [
  {
    path: '',
    component: CertificacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificacionPageRoutingModule {}
