import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';


@Injectable({
  providedIn: 'root'
})
export class ProfessionService {

  readonly URL_API = this.config.getConfig().bussinesServer.urlBackend

  constructor(
    private http: HttpClient,
    private config: ConfigService) {
  }

  create(data: any) {
    return this.http.post(this.URL_API + '/api/profession', data)
  }

  createMultiple(data: any) {
    return this.http.post(this.URL_API + '/api/profession/multiple', data)
  }

  getAll() {
    return this.http.get(this.URL_API + '/api/profession')
  }
  
  enable(data: any) {
    return this.http.post(this.URL_API + '/api/profession/enable', data)
  }
  
  search(data: any) {
    return this.http.post(this.URL_API + '/api/profession/search', data)
  }

  update(data: any) {
    return this.http.post(this.URL_API + '/api/profession/update', data)
  }

  delete(data: any) {
    return this.http.post(this.URL_API + '/api/profession/delete', data)
  } 
}