import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';


@Injectable({
  providedIn: 'root'
})
export class ModalityService {

  readonly URL_API = this.config.getConfig().bussinesServer.urlBackend

  constructor(
    private http: HttpClient,
    private config: ConfigService) {
  }

  create(data: any) {
    return this.http.post(this.URL_API + '/api/modality', data)
  }

  getAll() {
    return this.http.get(this.URL_API + '/api/modality')
  }
  
  enable(data: any) {
    return this.http.post(this.URL_API + '/api/modality/enable', data)
  }
  
  search(data: any) {
    return this.http.post(this.URL_API + '/api/modality/search', data)
  }

  update(data: any) {
    return this.http.post(this.URL_API + '/api/modality/update', data)
  }

  /* 

  delete(data: any) {
    return this.http.post(this.URL_API + '/api/modality/delete', data)
  } */

}
