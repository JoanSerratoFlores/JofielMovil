import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertificacionPageRoutingModule } from './certificacion-routing.module';

import { CertificacionPage } from './certificacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertificacionPageRoutingModule
  ],
  declarations: [CertificacionPage]
})
export class CertificacionPageModule {}
