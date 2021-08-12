import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-pregunta',
  templateUrl: './modal-pregunta.component.html',
  styleUrls: ['./modal-pregunta.component.scss'],
})
export class ModalPreguntaComponent implements OnInit {

  constructor(public modalctrl:ModalController) { }

  ngOnInit() {}
  dismiss()
  {
    this.modalctrl.dismiss()
  }
}
