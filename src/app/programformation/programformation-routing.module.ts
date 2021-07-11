import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramformationPage } from './programformation.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramformationPageRoutingModule {}
