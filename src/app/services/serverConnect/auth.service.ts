import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../../environments/environment.prod";
import { catchError, retry } from 'rxjs/operators';
import { ConfigService } from "./config.service";
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public api = environment.urlServer

  constructor(
    private http: HttpClient,
    private config: ConfigService,
  ) { }

  login(data){
    const url = `${ environment.urlServer }/auth/login`
    return this.http.post(url, data,)
    .pipe(
      catchError(error => {
          if (error.error instanceof ErrorEvent) {
              console.log(`Error: ${error.error.message}`);
          } else {
              
              console.log(error.error);
              return of (error.error)
          }
          return of([]);
      })
  );
  }

  question(data: Object){
    let stringToken = localStorage.getItem('token');
    let token = stringToken.replace(/['"]+/g, '')
    console.log(token);
    
    const httpOptions = {
      headers: new HttpHeaders({
      'Authorization': `Bearer ${token}`
      })
    };   


    const url = `${ environment.urlServer }/question`
    return this.http.post(url, data,httpOptions)
    .pipe(
      catchError(error => {
          if (error.error instanceof ErrorEvent) {
              console.log(`Error: ${error.error.message}`);
          } else {
              console.log(error);
              return of (error.error)
          }
          this.getQuestion();
          return of([]);
      })
  );
  }

  getQuestion(){
    let stringToken = localStorage.getItem('token');
    let token = stringToken.replace(/['"]+/g, '')
    console.log(token);
    
    const httpOptions = {
      headers: new HttpHeaders({
      'Authorization': `Bearer ${token}`
      })
    };   


    const url = `${ environment.urlServer }/question`
    return this.http.get(url,httpOptions)
    .pipe(
      catchError(error => {
          if (error.error instanceof ErrorEvent) {
              console.log(`Error: ${error.error.message}`);
          } else {
              console.log(error);
              return of (error.error)
          }
          return of([]);
      })
  );
  }

}
