import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurriculumVitaePageRoutingModule } from './curriculum-vitae-routing.module';

import { CurriculumVitaePage } from './curriculum-vitae.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurriculumVitaePageRoutingModule
  ],
  declarations: [CurriculumVitaePage]
})
export class CurriculumVitaePageModule {}
