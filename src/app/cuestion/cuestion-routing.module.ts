import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuestionPage } from './cuestion.page';

const routes: Routes = [
  {
    path: '',
    component: CuestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuestionPageRoutingModule {}
