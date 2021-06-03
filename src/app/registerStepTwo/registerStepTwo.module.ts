import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterStepTwoPageRoutingModule } from './registerStepTwo-routing.module';

import { RegisterStepTwoPage } from './registerStepTwo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterStepTwoPageRoutingModule
  ],
  declarations: [RegisterStepTwoPage]
})
export class RegisterStepTwoPageModule {}
