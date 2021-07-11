import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderbuttonsService {

  constructor() { }

  public headerButtons = 
    {
      data:[
        {
          img: "../../../assets/iconos/home.svg",
          label:"Inicio"
        },
        {
          img: "../../../assets/iconos2/circulos.svg",
          label:"Círculos"
        },
        {
          img: "../../../assets/iconos2/responder.svg",
          label:"Responder"
        },
        {
          img: "../../../assets/iconos2/mensaje.svg",
          label:"Mensajes"
        },
        {
          img: "../../../assets/iconos/sonido.svg",
          label:"Audio-Artículos"
        },
        {
          img: "../../../assets/iconos/coin.svg",
          label:"Monetizar"
        },
        {
          img: "../../../assets/iconos/bell.svg",
          label:"Notificaciones"
        }

      ]
      
    }
  
}
