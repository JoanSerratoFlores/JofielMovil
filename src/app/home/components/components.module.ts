import { RespuestaComponent } from './respuesta/respuesta.component';
import { ModalComponent } from './../components/modal/modal.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ModalComponent,RespuestaComponent],
  exports:[ModalComponent,RespuestaComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
