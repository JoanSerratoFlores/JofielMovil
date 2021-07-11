import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtrosLogrosPageRoutingModule } from './otros-logros-routing.module';

import { OtrosLogrosPage } from './otros-logros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtrosLogrosPageRoutingModule
  ],
  declarations: [OtrosLogrosPage]
})
export class OtrosLogrosPageModule {}
