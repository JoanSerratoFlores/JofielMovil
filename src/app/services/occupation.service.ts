import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';


@Injectable({
  providedIn: 'root'
})
export class OccupationService {

  readonly URL_API = this.config.getConfig().bussinesServer.urlBackend

  constructor(
    private http: HttpClient,
    private config: ConfigService) {
  }

  create(data: any) {
    return this.http.post(this.URL_API + '/api/occupation', data)
  }

  createMultiple(data: any) {
    return this.http.post(this.URL_API + '/api/occupation/multiple', data)
  }

  getAll() {
    return this.http.get(this.URL_API + '/api/occupation')
  }
  
  enable(data: any) {
    return this.http.post(this.URL_API + '/api/occupation/enable', data)
  }
  
  search(data: any) {
    return this.http.post(this.URL_API + '/api/occupation/search', data)
  }

  update(data: any) {
    return this.http.post(this.URL_API + '/api/occupation/update', data)
  }

  delete(data: any) {
    return this.http.post(this.URL_API + '/api/occupation/delete', data)
  } 
}