import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public logoBlanco = "../../assets/iconos/jofiel_blanco-06.svg"


  constructor(public router:Router) { }

  ngOnInit() {}
  gohome(){
    this.router.navigateByUrl("/home")
  }
  gocuestion(){this.router.navigateByUrl("/cuestion")}
}
