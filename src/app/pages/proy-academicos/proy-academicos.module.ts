import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProyAcademicosPageRoutingModule } from './proy-academicos-routing.module';

import { ProyAcademicosPage } from './proy-academicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProyAcademicosPageRoutingModule
  ],
  declarations: [ProyAcademicosPage]
})
export class ProyAcademicosPageModule {}
