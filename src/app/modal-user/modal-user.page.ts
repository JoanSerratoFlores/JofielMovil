import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { DataService } from '../services/data.services';
import { UtilService } from '../utils/Util';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.page.html',
  styleUrls: ['./modal-user.page.scss'],
})
export class ModalUserPage implements OnInit {

  constructor(
    public dataService: DataService,
    public utilService: UtilService,
    public navParams: NavParams) { }

  ngOnInit() {
    this.dataService.msg = this.navParams.get('msg');
    this.dataService.title = this.navParams.get('title');
  }

}
