import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewCredencialPageRoutingModule } from './new-credencial-routing.module';

import { NewCredencialPage } from './new-credencial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewCredencialPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [NewCredencialPage]
})
export class NewCredencialPageModule {}
