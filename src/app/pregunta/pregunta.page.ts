import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { RespuestaComponent } from '../home/components/respuesta/respuesta.component';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
})
export class PreguntaPage implements OnInit {

  constructor(private popoverController:PopoverController) { }
  async Popoverrespuesta(ev: any) {
    const popover = await this.popoverController.create({
      component: RespuestaComponent,
      cssClass: 'popoverrespuesta',
      event: ev,
      mode:"ios",
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  ngOnInit() {
  }
  console(){
    console.log('puto')
  }

}
