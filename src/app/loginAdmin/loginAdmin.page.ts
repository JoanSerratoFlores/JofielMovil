import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { UtilService } from '../utils/Util';

@Component({
  selector: 'app-login',
  templateUrl: './loginAdmin.page.html',
  styleUrls: ['./loginAdmin.page.scss'],
})
export class LoginAdminPage implements OnInit {

  public form: FormGroup
  public username: AbstractControl 
  public password : AbstractControl
  public submitted = false

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private utilService: UtilService) { 
    this.form = this.formBuilder.group({
      username: ['', Validators.required ],
      password: ['', Validators.required ],
    })

    this.username = this.form.controls['username']
    this.password = this.form.controls['password']
  }

  ngOnInit() {
    
  }

  get f() {
    return this.form.controls;
  }

  login(){
    this.submitted = true
    if(this.form.invalid)
     return false

    this.utilService.presentLoading()
    this.loginService.login(this.form.value).subscribe((res:any)=>{
      if(res.status){
        sessionStorage.setItem('username',res.user.username)
        sessionStorage.setItem('doc',res.user.doc)
        sessionStorage.setItem('firstname',res.user.firstname)
        sessionStorage.setItem('lastname',res.user.lastname)
        sessionStorage.setItem('email', res.user.email)
        sessionStorage.setItem('token', res.token)
        this.router.navigate(["/root"])
        this.utilService.hideLoading()
        this.form.reset()
        this.submitted = false
      }
      else
      {
        this.utilService.alertMsg("Aviso",res.message, "", "ios")
        this.utilService.hideLoading()
      }
     },err =>{
       this.utilService.hideLoading()
       this.utilService.alertMsg("Aviso","Ocurrio un error de comunicación con el servidor","","ios")
    })
  }
}
