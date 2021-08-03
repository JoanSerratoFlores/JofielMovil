import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public logoBlanco = "../../assets/iconos/jofiel_blanco-06.svg"


  constructor() { }

  ngOnInit() {}

}
