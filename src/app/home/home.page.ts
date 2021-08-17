import { SearchComponent } from './../curriculum-vitae/components/popover/search/search.component';
import { RespuestaComponent } from './components/respuesta/respuesta.component';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ModalComponent } from './components/modal/modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
 
  constructor(public popoverController: PopoverController,public router:Router) {}

  async presentPopover() {
    const popover = await this.popoverController.create({
      component: ModalComponent,
      cssClass: 'my-custom-class',
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

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
  topregunta()
  {
    this.router.navigateByUrl("pregunta");
  }
  tocv(){
    this.router.navigateByUrl("curriculum-vitae")
  }
  tocuestion(){
    this.router.navigateByUrl("cuestion")
  }
    
  ngOnInit() {
  }

}
