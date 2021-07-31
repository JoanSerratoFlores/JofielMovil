import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CredencialesLaboralesPage } from './credenciales-laborales.page';

const routes: Routes = [
  {
    path: '',
    component: CredencialesLaboralesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CredencialesLaboralesPageRoutingModule {}
