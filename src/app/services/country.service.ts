import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  readonly URL_API = this.config.getConfig().bussinesServer.urlBackend

  constructor(
    private http: HttpClient,
    private config: ConfigService) {
  }

  create(data: any) {
    return this.http.post(this.URL_API + '/api/country', data)
  }

  createMultiple(data: any) {
    return this.http.post(this.URL_API + '/api/country/multiple', data)
  }

  getAll() {
    return this.http.get(this.URL_API + '/api/country')
  }
  
  enable(data: any) {
    return this.http.post(this.URL_API + '/api/country/enable', data)
  }
  
  search(data: any) {
    return this.http.post(this.URL_API + '/api/country/search', data)
  }

  update(data: any) {
    return this.http.post(this.URL_API + '/api/country/update', data)
  }

  delete(data: any) {
    return this.http.post(this.URL_API + '/api/country/delete', data)
  } 
}