import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.page.html',
  styleUrls: ['./registerform.page.scss'],
})
export class RegisterformPage implements OnInit {
  index=0
  slideOpts:any
  constructor(private router:Router) { }

  ngOnInit() {
  }
  toHome()
  {
    this.router.navigateByUrl('home');
  }

}
