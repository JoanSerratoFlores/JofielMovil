import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-new-credencial',
  templateUrl: './new-credencial.page.html',
  styleUrls: ['./new-credencial.page.scss'],
})
export class NewCredencialPage implements OnInit {

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'alertcustomclasscss',
      message: 'Seguro que desea guardar estos cambios?',
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