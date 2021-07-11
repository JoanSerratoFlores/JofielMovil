import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtrosLogrosPage } from './otros-logros.page';

const routes: Routes = [
  {
    path: '',
    component: OtrosLogrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtrosLogrosPageRoutingModule {}
