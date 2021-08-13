import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.page.html',
  styleUrls: ['./loginadmin.page.scss'],
})
export class LoginadminPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  gohome()
  {
    this.router.navigateByUrl("home");
  }

}
