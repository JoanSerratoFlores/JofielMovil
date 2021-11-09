import { PopoverComponentTema } from './../modal-pregunta/popover/popover.component';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-pregunta',
  templateUrl: './modal-pregunta.component.html',
  styleUrls: ['./modal-pregunta.component.scss'],
})
export class ModalPreguntaComponent implements OnInit {

  constructor(public modalctrl:ModalController,public popoverComponent:PopoverController,public router:Router) { }

  ngOnInit() {}
  dismiss()
  {
    this.modalctrl.dismiss()
  }
  async PopoverTema(ev: any) {
    const popover = await this.popoverComponent.create({
      component: PopoverComponentTema,
      cssClass: 'popovertema',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  tocv(){
    this.modalctrl.dismiss()
    this.router.navigateByUrl("curriculum-vitae")
  }
  
}
