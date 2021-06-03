import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';


@Injectable({
  providedIn: 'root'
})
export class SectorService {

  readonly URL_API = this.config.getConfig().bussinesServer.urlBackend

  constructor(
    private http: HttpClient,
    private config: ConfigService) {
  }

  create(data: any) {
    return this.http.post(this.URL_API + '/api/sector', data)
  }

  createMultiple(data: any) {
    return this.http.post(this.URL_API + '/api/sector/multiple', data)
  }

  getAll() {
    return this.http.get(this.URL_API + '/api/sector')
  }
  
  enable(data: any) {
    return this.http.post(this.URL_API + '/api/sector/enable', data)
  }
  
  search(data: any) {
    return this.http.post(this.URL_API + '/api/sector/search', data)
  }

  update(data: any) {
    return this.http.post(this.URL_API + '/api/sector/update', data)
  }

  delete(data: any) {
    return this.http.post(this.URL_API + '/api/sector/delete', data)
  } 
}