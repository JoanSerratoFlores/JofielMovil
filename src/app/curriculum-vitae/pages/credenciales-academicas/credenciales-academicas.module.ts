import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CredencialesAcademicasPageRoutingModule } from './credenciales-academicas-routing.module';

import { CredencialesAcademicasPage } from './credenciales-academicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CredencialesAcademicasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CredencialesAcademicasPage]
})
export class CredencialesAcademicasPageModule {}
