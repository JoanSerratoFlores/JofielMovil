import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit-credencial',
  templateUrl: './edit-credencial.page.html',
  styleUrls: ['./edit-credencial.page.scss'],
})
export class EditCredencialPage implements OnInit {

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'alertcustomclasscss',
      message: 'Seguro que desea editar esta credencial academica?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'btnconfirm',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          cssClass: 'btnconfirm',
          text: 'Si  ',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}