import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertifSENAPageRoutingModule } from './certif-sena-routing.module';

import { CertifSENAPage } from './certif-sena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertifSENAPageRoutingModule
  ],
  declarations: [CertifSENAPage]
})
export class CertifSENAPageModule {}
