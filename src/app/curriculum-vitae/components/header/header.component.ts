import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public logoBlanco = "../../assets/iconos/jofiel_blanco-06.svg"


  public headerButtons = 
  {
    data:[
      {
        img: "../../../assets/iconos/inicio.png",
        label:"Inicio"
      },
      {
        img: "../../../assets/iconos/cuestionarios.png",
        label:"Cuestionario"
      },
      {
        img: "../../assets/iconos/suscribirse.png",
        label:"Suscribirse"
      },
      {
        img: "../../../assets/iconos/sonido.svg",
        label:"Audio-Artículos"
      },
      {
        img: "../../../assets/iconos/mensaje.png",
        label:"Monetizar"
      },
      {
        img: "../../../assets/iconos/noti.png",
        label:"Notificaciones"
      }

    ]
    
  }
  constructor() { }

  ngOnInit() {}

}
