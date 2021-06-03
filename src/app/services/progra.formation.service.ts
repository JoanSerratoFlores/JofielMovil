import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';


@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  readonly URL_API = this.config.getConfig().bussinesServer.urlBackend

  constructor(
    private http: HttpClient,
    private config: ConfigService) {
  }

  create(data: any) {
    return this.http.post(this.URL_API + '/api/program', data)
  }

  createMultiple(data: any) {
    return this.http.post(this.URL_API + '/api/program/multiple', data)
  }

  getAll() {
    return this.http.get(this.URL_API + '/api/program')
  }

  getSkillByID(data: any) {
    return this.http.post(this.URL_API + '/api/program/getSkillByID', data)
  }

  enable(data: any) {
    return this.http.post(this.URL_API + '/api/program/enable', data)
  }

  search(data: any) {
    return this.http.post(this.URL_API + '/api/program/search', data)
  }

  update(data: any) {
    return this.http.post(this.URL_API + '/api/program/update', data)
  }

  delete(data: any) {
    return this.http.post(this.URL_API + '/api/program/delete', data)
  }

}
