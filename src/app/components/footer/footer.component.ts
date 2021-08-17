import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { SearchComponent } from 'src/app/curriculum-vitae/components/popover/search/search.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}
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
}
