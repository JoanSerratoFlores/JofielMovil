import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { DataService } from '../services/data.services';
import { UserService } from '../services/user.service';
import { UtilService } from '../utils/Util';

@Component({
  selector: 'app-modal-profile',
  templateUrl: './modal-profile.page.html',
  styleUrls: ['./modal-profile.page.scss'],
})
export class ModalProfilePage implements OnInit {

  public senData = []
  public status = false
  constructor(
    public dataService: DataService,
    public utilService: UtilService,
    private userService: UserService,
    public alertController: AlertController,
    public modalController: ModalController,
    public navParams: NavParams) { }

  ngOnInit() {
    this.dataService.msg = this.navParams.get('msg');
    this.dataService.title = this.navParams.get('title');
    if(this.dataService.anyStringData.length > 0 && this.dataService.anyStringData != null)
    {
      this.setRoles()
    }

  }
  
  setRoles(){
    if(this.dataService.anyStringData != null && this.dataService.anyStringData.length > 0)
    {
      for(let k = 0; k < this.dataService.storage.length; k++) {
        for (let i = 0; i < this.dataService.anyStringData.length; i++) {
          if(this.dataService.anyStringData[i].name == this.dataService.storage[k].name)
          {
            this.dataService.storage[k].check = true
          }
        }
     }
    }
    else
    {
      this.dataService.storage.forEach(i => {
         i.check = false
      })
      this.dataService.storage = null
      this.dataService.storageUser =  null
    }
  }

  add(item: any){
    this.dataService.storage.forEach(i => {
        if(i._id == item._id)
        {
         i.check = !i.check
         this.userService.setProfiles({ data: i, doc: this.dataService.storageUser }).subscribe((res: any) =>{
        })
       }
     })
  }

  async closeModal() {
    this.dataService.anyStringData = null
    this.dataService.storage = null
    this.dataService.storageUser =  null
    await this.modalController.dismiss()
  }
}
