import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit {

  readonly URL_API = this.config.getConfig().bussinesServer.urlBackend
  constructor(
    private http: HttpClient, 
    private config:ConfigService
    ) 
   {
   }

  ngOnInit(){}

  login(dataUser: any){
    return this.http.post(this.URL_API+'/api/security/login', dataUser)
  }

  islog(token: string){
    return this.http.get(this.URL_API+`/api/security/islog/${token}`)
  } 
}

