import { Component, OnInit } from '@angular/core';
import { HeaderbuttonsService } from '../services/static/headerbuttons.service'
import { UserMenuComponent } from "./popOver/user-menu/user-menu.component";
import { NotificationsComponent } from "./popOver/notifications/notifications.component";
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.page.html',
  styleUrls: ['./principal-page.page.scss'],
})
export class PrincipalPagePage implements OnInit {

  public logoBlanco = "../../assets/iconos/jofiel_blanco-06.svg"

  constructor(
    public headerButtons:HeaderbuttonsService,
    public popoverController: PopoverController
  ) { }

  ngOnInit() {
    console.log(this.headerButtons);
    
  }

  async userMenu(event:any){
    const popover = await this.popoverController.create({
      event,
      component: UserMenuComponent,
      cssClass: 'userMenu', // optional
      mode:"ios"
      
    });
    return await popover.present();
  }

  async notificaciones(){
    const popover = await this.popoverController.create({
      event,
      component: NotificationsComponent,
      //cssClass: 'userMenu', // optional
      mode:"ios"
      
    });
    return await popover.present();
    
  }

}
