import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NombresLibrosPageRoutingModule } from './nombres-libros-routing.module';

import { NombresLibrosPage } from './nombres-libros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NombresLibrosPageRoutingModule
  ],
  declarations: [NombresLibrosPage]
})
export class NombresLibrosPageModule {}
