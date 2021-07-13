import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-historial-habilidades',
  templateUrl: './historial-habilidades.page.html',
  styleUrls: ['./historial-habilidades.page.scss'],
})
export class HistorialHabilidadesPage implements OnInit {

  constructor(public modalController: ModalController) {
  }

  ngOnInit() {
  }
closeModal(){
  this.modalController.dismiss();
}
}
