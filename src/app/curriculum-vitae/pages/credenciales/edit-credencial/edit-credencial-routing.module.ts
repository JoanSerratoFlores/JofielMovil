import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditCredencialPage } from './edit-credencial.page';

const routes: Routes = [
  {
    path: '',
    component: EditCredencialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditCredencialPageRoutingModule {}
