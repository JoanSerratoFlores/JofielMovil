import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';


@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  readonly URL_API = this.config.getConfig().bussinesServer.urlBackend

  constructor(
    private http: HttpClient,
    private config: ConfigService) {
  }

  create(data: any) {
    return this.http.post(this.URL_API + '/api/technology', data)
  }

  createMultiple(data: any) {
    return this.http.post(this.URL_API + '/api/technology/multiple', data)
  }

  getAll() {
    return this.http.get(this.URL_API + '/api/technology')
  }
  
  enable(data: any) {
    return this.http.post(this.URL_API + '/api/technology/enable', data)
  }
  
  search(data: any) {
    return this.http.post(this.URL_API + '/api/technology/search', data)
  }

  update(data: any) {
    return this.http.post(this.URL_API + '/api/technology/update', data)
  }

  delete(data: any) {
    return this.http.post(this.URL_API + '/api/technology/delete', data)
  } 
}