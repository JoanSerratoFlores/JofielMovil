import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.page.html',
  styleUrls: ['./curriculum-vitae.page.scss'],
})
export class CurriculumVitaePage implements OnInit {

  public image = "../../assets/iconos2/avatar.png"
  public progress = .15;
  public porcentaje =0;
  constructor() { }

  ngOnInit() {
this.porcentaje = this.progress*100;
  }

}
