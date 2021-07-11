import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';


@Injectable({
  providedIn: 'root'
})
export class KnowledgeService {

  readonly URL_API = this.config.getConfig().bussinesServer.urlBackend

  constructor(
    private http: HttpClient,
    private config: ConfigService) {
  }

  create(data: any) {
    return this.http.post(this.URL_API + '/api/knowledge', data)
  }

  createMultiple(data: any) {
    return this.http.post(this.URL_API + '/api/knowledge/multiple', data)
  }

  getAll() {
    return this.http.get(this.URL_API + '/api/knowledge')
  }
  
  enable(data: any) {
    return this.http.post(this.URL_API + '/api/knowledge/enable', data)
  }
  
  search(data: any) {
    return this.http.post(this.URL_API + '/api/knowledge/search', data)
  }

  update(data: any) {
    return this.http.post(this.URL_API + '/api/knowledge/update', data)
  }

  delete(data: any) {
    return this.http.post(this.URL_API + '/api/knowledge/delete', data)
  } 

}
