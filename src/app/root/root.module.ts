import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RootPageRoutingModule } from './root-routing.module';
import { RootPage } from './root.page';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RootPageRoutingModule,
    NgxPaginationModule
  ],
  declarations: [RootPage]
})
export class RootPageModule {}
