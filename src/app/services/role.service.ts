import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';


@Injectable({
  providedIn: 'root'
})
export class RoleService {

  readonly URL_API = this.config.getConfig().bussinesServer.urlBackend

  constructor(
    private http: HttpClient,
    private config: ConfigService) {
  }

  create(data: any) {
    return this.http.post(this.URL_API + '/api/role', data)
  }

  createMultiple(data: any) {
    return this.http.post(this.URL_API + '/api/rolemultiple', data)
  }

  getAll() {
    return this.http.get(this.URL_API + '/api/role')
  }

  getSkillByID(data: any) {
    return this.http.post(this.URL_API + '/api/role/getSkillByID', data)
  }

  enable(data: any) {
    return this.http.post(this.URL_API + '/api/role/enable', data)
  }

  search(data: any) {
    return this.http.post(this.URL_API + '/api/role/search', data)
  }

  update(data: any) {
    return this.http.post(this.URL_API + '/api/role/update', data)
  }

  delete(data: any) {
    return this.http.post(this.URL_API + '/api/category/delete', data)
  }

}
