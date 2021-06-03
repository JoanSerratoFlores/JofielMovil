import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { ThemeComponent } from "../../popOver/theme/theme.component";
import { VisibilityComponent } from "../../popOver/visibility/visibility.component";
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/serverConnect/auth.service';
//import { HomeComponent } from "../../home/home.component";


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  question;
  questions;


  constructor(
    public modalController: ModalController,
    public popoverController: PopoverController,
    private formBuilder: FormBuilder,
    private login: AuthService,
    //private home: HomeComponent
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      question:[''],
    })
  }

  get f() { return this.registerForm.controls; }

  onSubmit(){
/* 
    this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        } */
        let question = {
          "title": this.question,
          "selectedTopics": ["6046bfbabd95da37e834f082", "6046bfbfbd95da37e834f083", "60400b6c849e2b292808739c"],
          "visibility": {
              "selectedUsers": ["6046bf64bd95da37e834f080", "6046bf78bd95da37e834f081"],
              "selectedCircles": ["6046b3f12a614c21588a2936"],
              "isPublic": true
          }
      } 

      this.login.question(question).subscribe( res =>{
        
        /* this.login.getQuestion().subscribe( res => {
          console.log("Preguntas", res.questions);
          this.questions = res.questions
        }); */
        /* this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
          this.router.navigate(['Your actualComponent']);
      });  */
        this.dismiss();
      })

  }

  onKey(event) {
    this.question = event.target.value;
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async theme(ev: any) {
    const popover = await this.popoverController.create({
      component: ThemeComponent,
      cssClass: 'themePopOver',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  async visibility(ev: any) {
    const popover = await this.popoverController.create({
      component: VisibilityComponent,
      cssClass: 'visibilityPopOver',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
