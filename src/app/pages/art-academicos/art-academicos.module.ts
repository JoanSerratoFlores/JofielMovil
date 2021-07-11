import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtAcademicosPageRoutingModule } from './art-academicos-routing.module';

import { ArtAcademicosPage } from './art-academicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtAcademicosPageRoutingModule
  ],
  declarations: [ArtAcademicosPage]
})
export class ArtAcademicosPageModule {}
