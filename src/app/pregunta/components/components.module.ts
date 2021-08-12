import { PopoverComponent } from './modal-link/popover/popover.component';
import { IonicModule } from '@ionic/angular';
import { ModalLinkComponent } from './modal-link/modal-link.component';
import { ModalPreguntaComponent } from './modal-pregunta/modal-pregunta.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ModalPreguntaComponent,ModalLinkComponent,PopoverComponent],
  exports: [ModalPreguntaComponent,ModalLinkComponent,PopoverComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
