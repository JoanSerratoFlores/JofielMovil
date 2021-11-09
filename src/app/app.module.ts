import { ComponentsModule } from './curriculum-vitae/components/components.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Routes } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: 
  [AppComponent,
    
  ],
  entryComponents: 
  [

  ],
  imports: 
  [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    NoopAnimationsModule,
    ComponentsModule,
  ],
  providers:
  [
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    }
  ],
  bootstrap: 
  [
    AppComponent
  ],
})
export class AppModule {}
