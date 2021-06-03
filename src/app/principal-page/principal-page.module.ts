import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { PrincipalPagePageRoutingModule } from './principal-page-routing.module';

import { PrincipalPagePage } from './principal-page.page';
import { SectionLeftComponent } from '../section-left/section-left.component'
import { HomeComponent } from './home/home.component';
import { VisibilityComponent } from "../principal-page/popOver/visibility/visibility.component";
import { NotificationsComponent } from "../principal-page/popOver/notifications/notifications.component";
import { CommentsComponent } from "../principal-page/modal/comments/comments.component";
import { OptionsComponent } from "../principal-page/popOver/options/options.component";
import { ThemeComponent } from "../principal-page/popOver/theme/theme.component";
import { UserMenuComponent } from "../principal-page/popOver/user-menu/user-menu.component";




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalPagePageRoutingModule,
    
  ],
  declarations: [
    PrincipalPagePage,
    SectionLeftComponent,
    HomeComponent,
    VisibilityComponent,
    NotificationsComponent,
    CommentsComponent,
    OptionsComponent,
    ThemeComponent,
    UserMenuComponent,
  ],
  exports: [
    
  ]
})
export class PrincipalPagePageModule {}
