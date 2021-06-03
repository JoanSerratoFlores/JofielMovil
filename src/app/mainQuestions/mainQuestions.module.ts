import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainQuestionsPageRoutingModule } from './mainQuestions-routing.module';
import { MainQuestionsPage } from './mainQuestions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MainQuestionsPageRoutingModule
  ],
  declarations: [MainQuestionsPage]
})
export class MainQuestionsPageModule {}
