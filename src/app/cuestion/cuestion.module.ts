import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuestionPageRoutingModule } from './cuestion-routing.module';

import { CuestionPage } from './cuestion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuestionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CuestionPage]
})
export class CuestionPageModule {}
