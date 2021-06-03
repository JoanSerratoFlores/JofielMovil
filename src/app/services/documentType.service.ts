import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config-service';


@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService {

  readonly URL_API = this.config.getConfig().bussinesServer.urlBackend

  constructor(
    private http: HttpClient,
    private config: ConfigService) {
  }

  create(data: any) {
    return this.http.post(this.URL_API + '/api/document_type', data)
  }

  createMultiple(data: any) {
    return this.http.post(this.URL_API + '/api/document_type/multiple', data)
  }

  getAll() {
    return this.http.get(this.URL_API + '/api/document_type')
  }
  
  enable(data: any) {
    return this.http.post(this.URL_API + '/api/document_type/enable', data)
  }
  
  search(data: any) {
    return this.http.post(this.URL_API + '/api/document_type/search', data)
  }

  update(data: any) {
    return this.http.post(this.URL_API + '/api/document_type/update', data)
  }

  delete(data: any) {
    return this.http.post(this.URL_API + '/api/document_type/delete', data)
  } 
}