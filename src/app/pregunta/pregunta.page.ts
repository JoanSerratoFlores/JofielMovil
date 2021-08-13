import { Router } from '@angular/router';
import { ModalLinkComponent } from './components/modal-link/modal-link.component';
import { ModalPreguntaComponent } from './components/modal-pregunta/modal-pregunta.component';
import { ModalController, PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { RespuestaComponent } from '../home/components/respuesta/respuesta.component';
import { SearchComponent } from '../curriculum-vitae/components/popover/search/search.component';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
})
export class PreguntaPage implements OnInit {

  constructor(
    private popoverController:PopoverController,
    public modalController: ModalController,
    public router:Router) { }
  
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
  async ModalPregunta() {
    const modal = await this.modalController.create({
      component: ModalPreguntaComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  async ModalLink() {
    const modal = await this.modalController.create({
      component: ModalLinkComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  async Popoversearch(ev: any) {
    const popover = await this.popoverController.create({
      component: SearchComponent,
      cssClass: 'popoversearch',
      event: ev,
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
golibros(){
  this.router.navigateByUrl("libros")
}
}
