import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  constructor(private popoverctrl:PopoverController) { }

  ngOnInit() {}
  dismiss()
  {
    this.popoverctrl.dismiss()
  }
}
