import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HistorialHabilidadesPage } from 'src/app/modals/historial-habilidades/historial-habilidades.page';

@Component({
  selector: 'app-capacitacion',
  templateUrl: './capacitacion.page.html',
  styleUrls: ['./capacitacion.page.scss'],
})
export class CapacitacionPage implements OnInit {
  public isActive: boolean = false;

  constructor(public modalController: ModalController) {
  }

  ngOnInit() {
  }
  async openModal() {
    const modal = await this.modalController.create({
      component: HistorialHabilidadesPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
