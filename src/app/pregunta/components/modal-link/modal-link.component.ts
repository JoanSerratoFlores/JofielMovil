import { PopoverComponent } from './popover/popover.component';
import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-modal-link',
  templateUrl: './modal-link.component.html',
  styleUrls: ['./modal-link.component.scss'],
})
export class ModalLinkComponent implements OnInit {
  constructor(public modalctrl:ModalController,public popoverController:PopoverController) { }

  ngOnInit() {}
  dismiss()
  {
    this.modalctrl.dismiss()
  }
  async presentPopover() {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'popoverpublico',
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  ionViewDidEnter(){
   this.presentPopover()
  }
}
