import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterStepTwoPage } from './registerStepTwo.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterStepTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterStepTwoPageRoutingModule {}
