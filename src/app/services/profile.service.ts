import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  readonly URL_API = this.config.getConfig().bussinesServer.urlBackend

  constructor(
    private http: HttpClient,
    private config: ConfigService) {
  }

  getAll() {
    return this.http.get(this.URL_API + '/api/profile/')
  }
  
  create(data: any) {
    return this.http.post(this.URL_API + '/api/profile', data)
  }

  searchbyuser(data: any) {
    return this.http.post(this.URL_API + '/api/profile/searchbyuser', data)
  }

  searchbydoc(data: any) {
    return this.http.post(this.URL_API + '/api/profile/searchbydoc', data)
  }

  update(data: any) {
    return this.http.post(this.URL_API + '/api/profile/update', data)
  }

}
