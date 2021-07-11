import { Injectable } from '@angular/core';
import { configuration } from '../configuration/configuration';
import { Message } from '../configuration/message';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public config = configuration
  public msgconfig = Message 
  constructor() { }

  getConfig()
  {
    return this.config
  }

  getConfigMessage()
  {
    return this.msgconfig
  }
}

