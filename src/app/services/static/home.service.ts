import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public banners = {
    data:[
      {
        title:"Consulta artículos académicos y científicos"
      },
      {
        title:"Aprende mas fácil respondiendo cuestionarios"
      },
      {
        title:"Audio-Artículos - Estudia escuchando"
      },
      {
        title:"Materiales educativos"
      }
    ]
      
  }

  public articles = {
    data:[
      {
        title:"Jurídicos"
      },
      {
        title:"Deportes"
      },
      {
        title:"Ventas"
      },
      {
        title:"Ciencía y Tecnología"
      },
    ]
  }

  public circlesAsk = {
    data:[
      {
        title:"Internet"
      },
      {
        title:"Tecnología y Computadores"
      },
      {
        title:"Electrónica"
      },
      {
        title:"Política"
      },
      {
        title:"Deportes"
      },
      {
        title:"Entretenimiento"
      },
      {
        title:"Comercio Internacional"
      },
      {
        title:"Ventas"
      },
      {
        title:"Tecnología"
      },
    ]
  }



  constructor() { }
}
