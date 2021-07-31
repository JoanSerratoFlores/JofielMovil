import { SearchComponent } from './components/popover/search/search.component';
import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurriculumVitaePageRoutingModule } from './curriculum-vitae-routing.module';

import { CurriculumVitaePage } from './curriculum-vitae.page';

@NgModule({
  entryComponents: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurriculumVitaePageRoutingModule,
    ComponentsModule
  ],
  declarations: [CurriculumVitaePage]
})
export class CurriculumVitaePageModule {}
