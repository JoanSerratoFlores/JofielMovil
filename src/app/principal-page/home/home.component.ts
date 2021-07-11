import { Component, OnInit } from '@angular/core';
import { HomeService } from "../../services/static/home.service";
import { CommentsComponent } from "../modal/comments/comments.component";
import { ModalController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { OptionsComponent } from "../popOver/options/options.component";
import { AuthService } from 'src/app/services/serverConnect/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  questions;

  constructor(
    public articlesMoney: HomeService,
    public modalController: ModalController,
    public popoverController: PopoverController,
    private login: AuthService,
  ) { }

  ngOnInit() {
    console.log("articlesMoney",this.articlesMoney.banners.data);
    this.getQestions();
  }

  async modal(){
    console.log("CLick en el searchbar");
    const modal = await this.modalController.create({
      component: CommentsComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async showPopover(event) {
    const popover = await this.popoverController.create({
      event,
      component: OptionsComponent,
      //cssClass: 'my-custom-class', // optional
      mode:"ios"
    });
    return await popover.present();
}

getQestions(){
  this.login.getQuestion().subscribe( res => {
    console.log("Preguntas", res.questions);
    this.questions = res.questions
  });
}

}
