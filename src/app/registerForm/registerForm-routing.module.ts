import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterFormPage } from './registerForm.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterFormPageRoutingModule {}
