import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';


@Injectable({
  providedIn: 'root'
})
export class LevelService {

  readonly URL_API = this.config.getConfig().bussinesServer.urlBackend

  constructor(
    private http: HttpClient,
    private config: ConfigService) {
  }

  create(data: any) {
    return this.http.post(this.URL_API + '/api/level', data)
  }

  getAll() {
    return this.http.get(this.URL_API + '/api/level')
  }

  enable(data: any) {
    return this.http.post(this.URL_API + '/api/level/enable', data)
  }

  search(data: any) {
    return this.http.post(this.URL_API + '/api/level/search', data)
  }

  searchSena(data: any) {
    return this.http.post(this.URL_API + '/api/level/searchsena', data)
  }

  update(data: any) {
    return this.http.post(this.URL_API + '/api/level/update', data)
  }

  delete(data: any) {
    return this.http.post(this.URL_API + '/api/level/delete', data)
  }

}
