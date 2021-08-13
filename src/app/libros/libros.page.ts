import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.page.html',
  styleUrls: ['./libros.page.scss'],
})
export class LibrosPage implements OnInit {
  public isActive: boolean = false;
    constructor() { }

  ngOnInit() {
  }
isactive(){
  this.isActive=true
}
isntactive(){
  this.isActive=false
}
}
