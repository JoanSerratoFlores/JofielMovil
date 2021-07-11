import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterStepOnePage } from './registerStepOne.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterStepOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterStepOnePageRoutingModule {}
