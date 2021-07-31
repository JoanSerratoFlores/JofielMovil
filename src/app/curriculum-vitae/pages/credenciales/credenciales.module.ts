import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CredencialesPageRoutingModule } from './credenciales-routing.module';

import { CredencialesPage } from './credenciales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CredencialesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CredencialesPage]
})
export class CredencialesPageModule {}
