import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainQuestionsPage } from './mainQuestions.page';

const routes: Routes = [
  {
    path: '',
    component: MainQuestionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainQuestionsPageRoutingModule {}
