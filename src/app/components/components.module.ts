import { FootComponent } from './foot/foot.component';
import { HeadComponent } from './head/head.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [HeaderComponent,FooterComponent,HeadComponent,FootComponent],
  exports:[HeaderComponent,FooterComponent,HeadComponent,FootComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
