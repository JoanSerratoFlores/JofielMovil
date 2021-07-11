import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  logout(){
    console.log("cerrar session");
    localStorage.removeItem("token");
    this.router.navigateByUrl("login")
  }

}
