import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  public image = "../../assets/iconos2/avatar.png"
  public progress = .15;
  public porcentaje =0;
  constructor() { }

  ngOnInit() {
this.porcentaje = this.progress*100;
  }

}
