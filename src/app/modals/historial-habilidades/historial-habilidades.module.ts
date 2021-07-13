import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialHabilidadesPageRoutingModule } from './historial-habilidades-routing.module';

import { HistorialHabilidadesPage } from './historial-habilidades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialHabilidadesPageRoutingModule
  ],
  declarations: [HistorialHabilidadesPage]
})
export class HistorialHabilidadesPageModule {}
