import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';


@Injectable({
  providedIn: 'root'
})
export class SkillService {

  readonly URL_API = this.config.getConfig().bussinesServer.urlBackend

  constructor(
    private http: HttpClient,
    private config: ConfigService) {
  }

  create(data: any) {
    return this.http.post(this.URL_API + '/api/skill', data)
  }

  createMultiple(data: any) {
    return this.http.post(this.URL_API + '/api/skill/multiple', data)
  }

  getAll() {
    return this.http.get(this.URL_API + '/api/skill')
  }

  getSkillByID(data: any) {
    return this.http.post(this.URL_API + '/api/skill/getSkillByID', data)
  }

  enable(data: any) {
    return this.http.post(this.URL_API + '/api/skill/enable', data)
  }

  search(data: any) {
    return this.http.post(this.URL_API + '/api/skill/search', data)
  }

  update(data: any) {
    return this.http.post(this.URL_API + '/api/skill/update', data)
  }

  delete(data: any) {
    return this.http.post(this.URL_API + '/api/skill/delete', data)
  }

}
