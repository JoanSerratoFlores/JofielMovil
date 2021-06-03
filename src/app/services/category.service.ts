import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  readonly URL_API = this.config.getConfig().bussinesServer.urlBackend

  constructor(
    private http: HttpClient,
    private config: ConfigService) {
  }

  create(data: any) {
    return this.http.post(this.URL_API + '/api/category', data)
  }

  createMultiple(data: any) {
    return this.http.post(this.URL_API + '/api/category/multiple', data)
  }

  getAll() {
    return this.http.get(this.URL_API + '/api/category')
  }

  getSkillByID(data: any) {
    return this.http.post(this.URL_API + '/api/category/getSkillByID', data)
  }

  enable(data: any) {
    return this.http.post(this.URL_API + '/api/category/enable', data)
  }

  search(data: any) {
    return this.http.post(this.URL_API + '/api/category/search', data)
  }

  searchSena(data: any) {
    return this.http.post(this.URL_API + '/api/category/searchsena', data)
  }

  update(data: any) {
    return this.http.post(this.URL_API + '/api/category/update', data)
  }

  delete(data: any) {
    return this.http.post(this.URL_API + '/api/category/delete', data)
  }

}
