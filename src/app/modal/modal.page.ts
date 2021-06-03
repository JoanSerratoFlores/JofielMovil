import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { DataService } from '../services/data.services';
import { UtilService } from '../utils/Util';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(
    public dataService: DataService,
    public utilService: UtilService,
    public navParams: NavParams) { }

  ngOnInit() {
    this.dataService.msg = this.navParams.get('msg');
    this.dataService.title = this.navParams.get('title');
  }

}
