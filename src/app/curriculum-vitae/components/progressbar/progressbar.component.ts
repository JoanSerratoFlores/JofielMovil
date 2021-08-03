import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss'],
})
export class ProgressbarComponent implements OnInit {

  public progress = .15;
  public porcentaje = 0;
  constructor() { }

  ngOnInit() 
  {
    this.porcentaje = this.progress*100;
  }
}
