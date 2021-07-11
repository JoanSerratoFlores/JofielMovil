import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  readonly URL_API = this.config.getConfig().bussinesServer.urlBackend

  constructor(
    private http: HttpClient,
    private config: ConfigService) {
  }

  create(data: any) {
    return this.http.post(this.URL_API + '/api/language', data)
  }

  createMultiple(data: any) {
    return this.http.post(this.URL_API + '/api/language/multiple', data)
  }

  getAll() {
    return this.http.get(this.URL_API + '/api/language')
  }
  
  enable(data: any) {
    return this.http.post(this.URL_API + '/api/language/enable', data)
  }
  
  search(data: any) {
    return this.http.post(this.URL_API + '/api/language/search', data)
  }

  update(data: any) {
    return this.http.post(this.URL_API + '/api/language/update', data)
  }

  delete(data: any) {
    return this.http.post(this.URL_API + '/api/language/delete', data)
  } 
}