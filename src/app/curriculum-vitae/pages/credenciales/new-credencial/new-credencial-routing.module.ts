import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewCredencialPage } from './new-credencial.page';

const routes: Routes = [
  {
    path: '',
    component: NewCredencialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewCredencialPageRoutingModule {}
