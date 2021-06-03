import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterStepOnePageRoutingModule } from './registerStepOne-routing.module';

import { RegisterStepOnePage } from './registerStepOne.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterStepOnePageRoutingModule
  ],
  declarations: [RegisterStepOnePage]
})
export class RegisterStepOnePageModule {}
