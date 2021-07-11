import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NombresLibrosPage } from './nombres-libros.page';

const routes: Routes = [
  {
    path: '',
    component: NombresLibrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NombresLibrosPageRoutingModule {}
