import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly URL_API = this.config.getConfig().bussinesServer.urlBackend

  constructor(
    private http: HttpClient,
    private config: ConfigService) {
  }

  create(data: any) {
    return this.http.post(this.URL_API + '/api/user', data)
  }

  getAll() {
    return this.http.get(this.URL_API + '/api/user')
  }

  getRolByUser(id: string) {
    return this.http.get(this.URL_API +`/api/user/${id}`)
  }

  searchByname(data: any) {
    return this.http.post(this.URL_API + '/api/user/userbyname', data)
  }

  searchBydoc(data: any) {
    return this.http.post(this.URL_API + '/api/user/usersbydoc', data)
  }

  enable(data: any) {
    return this.http.post(this.URL_API + '/api/user/enable', data)
  }

  update(data: any) {
    return this.http.post(this.URL_API + '/api/user/update', data)
  }

  delete(data: any) {
    return this.http.post(this.URL_API + '/api/user/delete', data)
  }

  setProfiles(data: any) {
    return this.http.post(this.URL_API + '/api/user/profiles', data)
  }
}
