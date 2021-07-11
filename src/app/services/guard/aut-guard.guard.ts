import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from  'rxjs/operators'
import { UtilService } from 'src/app/utils/Util';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class AutGuardGuard implements CanActivate {

  constructor(
    private loginService: LoginService, 
    private utilService: UtilService
   ){ }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    return this.loginService.islog(sessionStorage.getItem('token'))
    .pipe(take(1))
    .pipe(map( (res:any) => {
     if(res.status){
      return true
     }
     else
       this.utilService.logout()
    }))
  }
}
