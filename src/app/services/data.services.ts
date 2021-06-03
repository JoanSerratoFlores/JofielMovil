import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public storage: any;
  public storageUser: any;
  public token: any;
  public base64: any;
  public base64Rut: any;
  public base64RLG: any;
  public anyStringData: any;
  public msg: string;
  public title: string;

  public message = '';
  public subject = new Subject<any>();
  private messageSource = new  BehaviorSubject(this.message);
  public currentMessage = this.messageSource.asObservable();
 
  constructor(private router: Router) { }


  sendMessage(message: string) {
    this.messageSource.next(message)
  }

  home() {
    this.router.navigate(['/home']);
  }
}
