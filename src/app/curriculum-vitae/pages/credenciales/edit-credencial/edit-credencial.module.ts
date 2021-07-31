import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditCredencialPageRoutingModule } from './edit-credencial-routing.module';

import { EditCredencialPage } from './edit-credencial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditCredencialPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EditCredencialPage]
})
export class EditCredencialPageModule {}
