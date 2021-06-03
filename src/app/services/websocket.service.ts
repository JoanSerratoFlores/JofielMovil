import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { configuration } from '../configuration/configuration';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService{
  
  //public socket = io(configuration.bussinesServer.urlBackend)

  constructor()
  {

  }

  send(evento: string, data: any)
  {
    //this.socket.emit(evento, data)
  }
}
