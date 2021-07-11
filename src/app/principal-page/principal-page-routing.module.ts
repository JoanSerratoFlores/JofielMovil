import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AutGuardGuard } from "../services/guard/aut-guard.guard";
import { PrincipalPagePage } from './principal-page.page';

const routes: Routes = [
  {
    path: '',
    component: PrincipalPagePage,
    canActivate:[AutGuardGuard],
    children:[
      {
        path:'home',
        component:HomeComponent

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalPagePageRoutingModule {}
