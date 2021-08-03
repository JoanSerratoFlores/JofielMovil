import { ProgressbarComponent } from './progressbar/progressbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './popover/search/search.component';
import { InfoComponent } from './info/info.component';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [HeaderComponent,InfoComponent,SearchComponent,FooterComponent,ProgressbarComponent],
  exports:[HeaderComponent,InfoComponent,SearchComponent,FooterComponent,ProgressbarComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
