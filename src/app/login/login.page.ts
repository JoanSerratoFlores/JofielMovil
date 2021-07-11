import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/serverConnect/auth.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    registerForm: FormGroup;
    submitted = false;

  constructor(
    private login: AuthService,
    private formBuilder: FormBuilder,
    public alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      user:[''],
      password:[''],
    })
  }
  get f() { return this.registerForm.controls; }
  onSubmit(){

    this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        }
    /* let data = {
      "email":"elon@tesla.com",
      "password":"123456789"
    } */

    let data = {
      "email":this.registerForm.value.user,
      "password":this.registerForm.value.password
    }
    this.login.login(data).subscribe( res =>{
      let data = JSON.stringify(res.error);
      if (data) {
        this.presentAlert(JSON.stringify(res.error.message))
      }else{
        console.log(`respuesta login ${res.token}`);
        let token = res.token
        localStorage.setItem('token', token);
        this.router.navigateByUrl("principal/home")
      }
    })
  }

  async presentAlert(data) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      //subHeader: data,
      message: data,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


}
