import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertifSENAPage } from './certif-sena.page';

const routes: Routes = [
  {
    path: '',
    component: CertifSENAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertifSENAPageRoutingModule {}
