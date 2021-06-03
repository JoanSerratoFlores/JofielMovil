import { Component, OnInit } from '@angular/core';
import { SkillService } from '../services/skill.service';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  public skc = 1
  public skills : any

  ngOnInit() {
    this.getSkills()
  }

  public modules = [
    { name: 'hhhGestión de Niveles', icon:'assets/icon/mglevel.png'},
    { name: 'Gestión de Habilidades', icon:'assets/icon/mhabilitis.png'},
    { name: 'Gestión de Modalidades', icon:'assets/icon/gmodalitys.png'},
    { name: 'Gestión de Centros de Formación', icon:'assets/icon/gcformation.png'},
    { name: 'Gestión de Redes de Conocimiento', icon:'assets/icon/grlearn.png'},
    { name: 'Gestión de Competencias Lab.', icon:'assets/icon/gcompetitions.png'},
    { name: 'Gestión de Tecnologías Informáticas', icon:'assets/icon/gtech.png'}
  ]

  constructor(private skillService: SkillService) {

  }

  getSkills()
  {
   this.skillService.getAll().subscribe( (res:any)=>{
    this.skills = res
    console.log(" res ", res )
   })
  }

  call(menu: string){
    switch (menu) {
       case 'Gestión de Niveles':
        this.skc = 1
       break;
       case 'Gestión de Habilidades':
        this.skc = 2
       break;
       case 'Gestión de Modalidades':
        this.skc = 3
       break;
       case 'Gestión de Centros de Formación':
        this.skc = 4
       break;
   
     default:
       break;
   }
  }

}
