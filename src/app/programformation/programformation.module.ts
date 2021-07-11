import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramformationPageRoutingModule } from './programformation-routing.module';

import { ProgramformationPage } from './programformation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProgramformationPageRoutingModule
  ],
  declarations: [ProgramformationPage]
})
export class ProgramformationPageModule {}
