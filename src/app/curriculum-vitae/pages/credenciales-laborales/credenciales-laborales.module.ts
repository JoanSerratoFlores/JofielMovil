import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CredencialesLaboralesPageRoutingModule } from './credenciales-laborales-routing.module';

import { CredencialesLaboralesPage } from './credenciales-laborales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CredencialesLaboralesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CredencialesLaboralesPage]
})
export class CredencialesLaboralesPageModule {}
