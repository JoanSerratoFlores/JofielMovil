import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { SearchComponent } from 'src/app/curriculum-vitae/components/popover/search/search.component';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.scss'],
})
export class FootComponent implements OnInit {

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
